function speechSynthesisUtterance() {
  let speech: any;

  function textToSpeech(text: string) {
    if (speech?.speak) {
      return;
    }

    speech = new window.SpeechSynthesisUtterance(text);

    // speech.lang = "ko-KR";
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

  return { textToSpeech };
}

export default speechSynthesisUtterance;
