import Image from "next/image";
import { useRouter } from "next/router";
// import Logo from "public/education/hanpy_logo.png";
import Logo from "public/education/hanpy_computer.jpeg";

const AppGNB = () => {
  const router = useRouter();
  const styles: object =
    router.asPath === "/education"
      ? {
          width: "100vw",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          zIndex: 10,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          // position: "absolute",
          top: 0,
          padding: "0 60px",
        }
      : {
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          zIndex: 10,
          // position: "absolute",
          top: 0,
          padding: "0 60px",
        };
  return (
    <div style={styles}>
      <div>
        <a href={"/education"}>
          <Image
            src={Logo}
            alt="hanpy logo"
            width={65}
            unoptimized
            height={40}
          />
        </a>
      </div>

      <div style={{ fontFamily: "Gill Sans, sans-serif" }}>Toy-pj</div>
    </div>
  );
};

export default AppGNB;
