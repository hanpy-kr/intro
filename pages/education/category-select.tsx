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
    </>
  );
}
