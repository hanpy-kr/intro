import { getTokenOrRefresh } from "@/utils/azure";
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import {
  SpeechRecognitionEventArgs,
  Recognizer,
} from "microsoft-cognitiveservices-speech-sdk";
import { useEffect, useState } from "react";

// src: string | null,
// options?: UseScriptOptions,

function useAzure() {
  const [azureState, setAzureState] = useState({
    displayText: "INITIALIZED: ready to test speech...",
  });
  const [speechToText, setSpeechToText] = useState<string | null>(null);
  const [azureScore, setAzureScore] = useState<{
    AccuracyScore: number;
    PronScore: number;
    FluencyScore: number;
  } | null>(null);

  useEffect(() => {
    async function getToken() {
      const tokenRes = await getTokenOrRefresh();
      if (tokenRes.authToken === null) {
        setAzureState({
          displayText: "FATAL_ERROR: " + tokenRes.error,
        });
      }
    }
    getToken();
  }, []);

  // function getAudioConfig() {
  //   // If an audio file was specified, use it. Otherwise, use the microphone.
  //   // Depending on browser security settings, the user may be prompted to allow microphone use. Using
  //   // continuous recognition allows multiple phrases to be recognized from a single use authorization.
  //   if (audioFile) {
  //     return sdk.AudioConfig.fromWavFileInput(audioFile);
  //   } else if (inputSourceFileRadio.checked) {
  //     alert(
  //       "Please choose a file when selecting file input as your audio source."
  //     );
  //     return;
  //   } else if (microphoneSources.value) {
  //     return sdk.AudioConfig.fromMicrophoneInput(microphoneSources.value);
  //   } else {
  //     return sdk.AudioConfig.fromDefaultMicrophoneInput();
  //   }
  // }

  function getPronunciationAssessmentConfig(referenceText: string) {
    var pronunciationAssessmentConfig = new sdk.PronunciationAssessmentConfig(
      referenceText,
      sdk.PronunciationAssessmentGradingSystem.HundredMark,
      sdk.PronunciationAssessmentGranularity.Word,
      true
    );
    return pronunciationAssessmentConfig;
  }

  async function sttFromMic() {
    if (!sdk) return;
    // resetUiForScenarioStart() // reset base value
    const tokenObj = await getTokenOrRefresh();
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      tokenObj.authToken,
      tokenObj.region
    );

    speechConfig.speechRecognitionLanguage = "en-US";

    const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    setAzureState({
      displayText: "active",
    });

    recognizer.recognizeOnceAsync((result) => {
      let displayText;
      if (result.reason === sdk.ResultReason.RecognizedSpeech) {
        setSpeechToText(result.text);
        displayText = `RECOGNIZED: Text=${result.text}`;
      } else {
        displayText =
          "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.";
      }

      setAzureState({
        displayText: displayText,
      });
    });
  }

  // any : 아직 미사용
  async function fileChange(event: any) {
    const audioFile = event.target.files[0];
    const fileInfo = audioFile.name + ` size=${audioFile.size} bytes `;

    setAzureState({
      displayText: fileInfo,
    });

    const tokenObj = await getTokenOrRefresh();
    const speechConfig = sdk.SpeechConfig.fromAuthorizationToken(
      tokenObj.authToken,
      tokenObj.region
    );
    speechConfig.speechRecognitionLanguage = "en-US";

    const audioConfig = sdk.AudioConfig.fromWavFileInput(audioFile);
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync((result) => {
      let displayText;
      if (result.reason === sdk.ResultReason.RecognizedSpeech) {
        setSpeechToText(result.text);
        displayText = `RECOGNIZED: Text=${result.text}`;
      } else {
        displayText =
          "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.";
      }

      setAzureState({
        displayText: fileInfo + displayText,
      });
    });
  }

  // any : 아직 미사용
  function onRecognizedResult(result: any) {
    return null;
    // phraseDiv.scrollTop = phraseDiv.scrollHeight;

    // statusDiv.innerHTML += `(recognized)  Reason: ${SpeechSDK.ResultReason[result.reason]}`;
    // if (scenarioSelection.value === 'speechRecognizerRecognizeOnce'
    //     || scenarioSelection.value === 'intentRecognizerRecognizeOnce') {
    //     // Clear the final results view for single-shot scenarios
    //     phraseDiv.innerHTML = '';
    // } else {
    //     // Otherwise, just remove the ongoing hypothesis line
    //     phraseDiv.innerHTML = phraseDiv.innerHTML.replace(/(.*)(^|[\r\n]+).*\[\.\.\.\][\r\n]+/, '$1$2');
    // }

    // switch (result.reason) {
    //     case SpeechSDK.ResultReason.NoMatch:
    //         var noMatchDetail = SpeechSDK.NoMatchDetails.fromResult(result);
    //         statusDiv.innerHTML += ` NoMatchReason: ${SpeechSDK.NoMatchReason[noMatchDetail.reason]}\r\n`;
    //         break;
    //     case SpeechSDK.ResultReason.Canceled:
    //         var cancelDetails = SpeechSDK.CancellationDetails.fromResult(result);
    //         statusDiv.innerHTML += ` CancellationReason: ${SpeechSDK.CancellationReason[cancelDetails.reason]}`;
    //             + (cancelDetails.reason === SpeechSDK.CancellationReason.Error
    //                 ? `: ${cancelDetails.errorDetails}` : ``)
    //             + `\r\n`;
    //         break;
    //     case SpeechSDK.ResultReason.RecognizedSpeech:
    //     case SpeechSDK.ResultReason.TranslatedSpeech:
    //     case SpeechSDK.ResultReason.RecognizedIntent:
    //         statusDiv.innerHTML += `\r\n`;

    //         if (useDetailedResults) {
    //             var detailedResultJson = JSON.parse(result.json);

    //             // Detailed result JSON includes substantial extra information:
    //             //  detailedResultJson['NBest'] is an array of recognition alternates
    //             //  detailedResultJson['NBest'][0] is the highest-confidence alternate
    //             //  ...['Confidence'] is the raw confidence score of an alternate
    //             //  ...['Lexical'] and others provide different result forms
    //             var displayText = detailedResultJson['DisplayText'];
    //             phraseDiv.innerHTML += `Detailed result for "${displayText}":\r\n`
    //             + `${JSON.stringify(detailedResultJson, null, 2)}\r\n`;
    //         } else if (result.text) {
    //             phraseDiv.innerHTML += `${result.text}\r\n`;
    //         }

    //         var intentJson = result.properties
    //             .getProperty(SpeechSDK.PropertyId.LanguageUnderstandingServiceResponse_JsonResult);
    //         if (intentJson) {
    //             phraseDiv.innerHTML += `${intentJson}\r\n`;
    //         }

    //         if (result.translations) {
    //             var resultJson = JSON.parse(result.json);
    //             resultJson['privTranslationPhrase']['Translation']['Translations'].forEach(
    //                 function (translation) {
    //                 phraseDiv.innerHTML += ` [${translation.Language}] ${translation.Text}\r\n`;
    //             });
    //         }

    //         if (scenarioSelection.value.includes('pronunciation')) {
    //             var pronunciationAssessmentResult = SpeechSDK.PronunciationAssessmentResult.fromResult(result);
    //             phraseDiv.innerHTML +=
    //             `[Pronunciation result] Accuracy: ${pronunciationAssessmentResult.accuracyScore};
    //            Fluency: ${pronunciationAssessmentResult.fluencyScore};
    //            Completeness: ${pronunciationAssessmentResult.completenessScore}.\n`;
    //             pronunciationAssessmentResults.push(pronunciationAssessmentResult);
    //         }
    //         break;
    // }
  }

  // any : 아직 미사용
  function applyCommonConfigurationTo(recognizer: any) {
    //   // The 'recognizing' event signals that an intermediate recognition result is received.
    //   // Intermediate results arrive while audio is being processed and represent the current "best guess" about
    //   // what's been spoken so far.
    //   function onRecognizing(sender, recognitionEventArgs) {
    //     var result = recognitionEventArgs.result;
    //     statusDiv.innerHTML +=
    //       `(recognizing) Reason: ${SpeechSDK.ResultReason[result.reason]}` +
    //       ` Text: ${result.text}\r\n`;
    //     // Update the hypothesis line in the phrase/result view (only have one)
    //     phraseDiv.innerHTML =
    //       phraseDiv.innerHTML.replace(
    //         /(.*)(^|[\r\n]+).*\[\.\.\.\][\r\n]+/,
    //         "$1$2"
    //       ) + `${result.text} [...]\r\n`;
    //     phraseDiv.scrollTop = phraseDiv.scrollHeight;
    //   }
    // recognizer.recognizing = onRecognizing;

    // The 'recognized' event signals that a finalized recognition result has been received. These results are
    // formed across complete utterance audio (with either silence or eof at the end) and will include
    // punctuation, capitalization, and potentially other extra details.
    //
    // * In the case of continuous scenarios, these final results will be generated after each segment of audio
    //   with sufficient silence at the end.
    // * In the case of intent scenarios, only these final results will contain intent JSON data.
    // * Single-shot scenarios can also use a continuation on recognizeOnceAsync calls to handle this without
    //   event registration.
    // recognized: (sender: Recognizer, event: SpeechRecognitionEventArgs) => void;
    function onRecognized(
      sender: Recognizer,
      recognitionEventArgs: SpeechRecognitionEventArgs
    ) {
      var result = recognitionEventArgs.result;
      onRecognizedResult(recognitionEventArgs.result);
    }
    recognizer.recognized = onRecognized;

    //   // The 'canceled' event signals that the service has stopped processing speech.
    //   // https://docs.microsoft.com/javascript/api/microsoft-cognitiveservices-speech-sdk/speechrecognitioncanceledeventargs?view=azure-node-latest
    //   // This can happen for two broad classes of reasons:
    //   // 1. An error was encountered.
    //   //    In this case, the .errorDetails property will contain a textual representation of the error.
    //   // 2. No additional audio is available.
    //   //    This is caused by the input stream being closed or reaching the end of an audio file.
    //   function onCanceled(sender, cancellationEventArgs) {
    //     window.console.log(cancellationEventArgs);
    //     statusDiv.innerHTML +=
    //       "(cancel) Reason: " +
    //       SpeechSDK.CancellationReason[cancellationEventArgs.reason];
    //     if (cancellationEventArgs.reason === SpeechSDK.CancellationReason.Error) {
    //       statusDiv.innerHTML += ": " + cancellationEventArgs.errorDetails;
    //     }
    //     statusDiv.innerHTML += "\r\n";
    //   }
    //   recognizer.canceled = onCanceled;
    //   // The 'sessionStarted' event signals that audio has begun flowing and an interaction with the service has
    //   // started.
    //   function onSessionStarted(sender, sessionEventArgs) {
    //     statusDiv.innerHTML += `(sessionStarted) SessionId: ${sessionEventArgs.sessionId}\r\n`;
    //     for (const thingToDisableDuringSession of thingsToDisableDuringSession) {
    //       thingToDisableDuringSession.disabled = true;
    //     }
    //     scenarioStartButton.disabled = true;
    //     scenarioStopButton.disabled = false;
    //   }
    //   recognizer.sessionStarted = onSessionStarted;
    //   // The 'sessionStopped' event signals that the current interaction with the speech service has ended and
    //   // audio has stopped flowing.
    //   function onSessionStopped(sender, sessionEventArgs) {
    //     statusDiv.innerHTML += `(sessionStopped) SessionId: ${sessionEventArgs.sessionId}\r\n`;
    //     if (scenarioSelection.value == 'pronunciationAssessmentContinuous') {
    //         calculateOverallPronunciationScore();
    //     }
    //     for (const thingToDisableDuringSession of thingsToDisableDuringSession) {
    //         thingToDisableDuringSession.disabled = false;
    //     }
    //     scenarioStartButton.disabled = false;
    //     scenarioStopButton.disabled = true;
    // }
    //   recognizer.sessionStopped = onSessionStopped;
    //   // PhraseListGrammar allows for the customization of recognizer vocabulary.
    //   // The semicolon-delimited list of words or phrases will be treated as additional, more likely components
    //   // of recognition results when applied to the recognizer.
    //   //
    //   // See https://docs.microsoft.com/azure/cognitive-services/speech-service/get-started-speech-to-text#improve-recognition-accuracy
    //   if (phrases.value) {
    //     var phraseListGrammar =
    //       SpeechSDK.PhraseListGrammar.fromRecognizer(recognizer);
    //     phraseListGrammar.addPhrases(phrases.value.split(";"));
    //   }
  }

  async function doPronunciationAssessmentOnceAsync(
    referenceText: string,
    stopButtonElement: HTMLDivElement
  ) {
    if (!sdk) return;
    // resetUiForScenarioStart() // reset base value
    const tokenObj = await getTokenOrRefresh();

    const speechConfig = sdk.SpeechConfig.fromSubscription(
      tokenObj.authToken,
      tokenObj.region
    );

    speechConfig.speechRecognitionLanguage = "en-US";

    const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
    let recognizer: sdk.SpeechRecognizer | undefined = new sdk.SpeechRecognizer(
      speechConfig,
      audioConfig
    );

    var pronunciationAssessmentConfig =
      getPronunciationAssessmentConfig(referenceText);
    if (!audioConfig || !speechConfig || !pronunciationAssessmentConfig) return;

    // Create the SpeechRecognizer and set up common event handlers and PhraseList data
    // applyCommonConfigurationTo(recognizer);

    // Apply pronunciation assessment config to recognizer.
    pronunciationAssessmentConfig.applyTo(recognizer);

    // Note: in this scenario sample, the 'recognized' event is not being set to instead demonstrate
    // continuation on the 'recognizeOnceAsync' call. 'recognized' can be set in much the same way as
    // 'recognizing' if an event-driven approach is preferable.
    // recognizer.recognized;

    // Note: this scenario sample demonstrates result handling via continuation on the recognizeOnceAsync call.
    // The 'recognized' event handler can be used in a similar fashion.

    recognizer.recognizeOnceAsync((result: sdk.SpeechRecognitionResult) => {
      var pronunciationAssessmentResult =
        sdk.PronunciationAssessmentResult.fromResult(result);
      var pronunciationScore = pronunciationAssessmentResult.pronunciationScore;
      var wordLevelResult = pronunciationAssessmentResult.detailResult.Words;
      // console.dir(pronunciationAssessmentResult);
      // console.log(
      //   pronunciationAssessmentResult.detailResult.PronunciationAssessment
      // );
      // console.log(pronunciationScore);
      // console.log(wordLevelResult);
      setAzureScore(
        pronunciationAssessmentResult.detailResult.PronunciationAssessment
      );
    });

    stopButtonElement.addEventListener("click", function () {
      recognizer?.close();
      recognizer = undefined;
    });
    // recognizer.recognizeOnceAsync(
    //   function (successfulResult) {
    //     console.log(22222);
    //     console.log(successfulResult);
    //     onRecognizedResult(successfulResult);
    //   },
    //   function (err) {
    //     window.console.log(err);
    //     // phraseDiv.innerHTML += "ERROR: " + err;
    //   }
    // );

    // 초기값 추가되면 좋을 듯하다.
    // function enumerateMicrophones() {
    //   if (!navigator || !navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    //     console.log(`Unable to query for audio input devices. Default will be used.\r\n`);
    //     return;
    //   }

    //   navigator.mediaDevices.enumerateDevices().then((devices) => {
    //     microphoneSources.innerHTML = '';

    //     // Not all environments will be able to enumerate mic labels and ids. All environments will be able
    //     // to select a default input, assuming appropriate permissions.
    //     var defaultOption = document.createElement('option');
    //     defaultOption.appendChild(document.createTextNode('Default Microphone'));
    //     microphoneSources.appendChild(defaultOption);

    //     for (const device of devices) {
    //       if (device.kind === 'audioinput') {
    //         if (!device.deviceId) {
    //           window.console.log(
    //             `Warning: unable to enumerate a microphone deviceId. This may be due to limitations` +
    //               ` with availability in a non-HTTPS context per mediaDevices constraints.`,
    //           );
    //         } else {
    //           var opt = document.createElement('option');
    //           opt.value = device.deviceId;
    //           opt.appendChild(document.createTextNode(device.label));

    //           microphoneSources.appendChild(opt);
    //         }
    //       }
    //     }

    //     microphoneSources.disabled = microphoneSources.options.length == 1;
    //   });
    // }
  }

  return {
    speechToText,
    azureState,
    sttFromMic,
    fileChange,
    doPronunciationAssessmentOnceAsync,
    azureScore,
  };
}

export default useAzure;
