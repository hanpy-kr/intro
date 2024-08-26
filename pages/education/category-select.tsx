import bg from "public/education/background.jpeg";
import StepperButtonType from "../../component/stepper/button-type";
import AppGNB from "../../component/common/AppGNB";

export default function CategorySelect() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
        }}
      >
        <AppGNB />
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "450px" }}>
              <StepperButtonType />
            </div>
            <div style={{ width: "500px" }}></div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          overflow: "hidden",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          border: "0",
          clip: "rect(0,0,0,0)",
        }}
      >
        Please select the level that suits your level. Among the various levels,
        it is divided into beginner/intermediate/advanced. Depending on the
        user, we also provide projects for vocabulary preparation for students
        and free talking sites for adults.
      </div>
    </>
  );
}
