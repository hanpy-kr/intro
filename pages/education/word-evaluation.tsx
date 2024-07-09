import AIModelCard from "../../component/AI-model-card";
import AppGNB from "../../component/common/AppGNB";

const WordEvaluation = () => {
  const ContentType = "WordEvaluation";
  return (
    <>
      <AppGNB />

      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AIModelCard ContentType={ContentType} />
      </div>
    </>
  );
};

export default WordEvaluation;
