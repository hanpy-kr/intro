import AIModelCard from "../../component/AI-model-card";
import AppGNB from "../../component/common/AppGNB";

const FreetalkEvaluation = () => {
  const ContentType = "FreetalkEvaluation";
  return (
    <>
      <AppGNB />
      <div
        style={{
          // backgroundColor: "#fff5f5",
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

export default FreetalkEvaluation;
