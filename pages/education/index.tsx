// import { Inter } from "next/font/google";
import bg from "public/education/background.jpeg";
import { Button, Heading, Text, Link } from "@chakra-ui/react";
import AppGNB from "../../component/common/AppGNB";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
              <Heading
                as="h2"
                size="xl"
                lineHeight="130%"
                fontFamily="Gill Sans, sans-serif"
              >
                Enhance Speaking skills
              </Heading>
              <Heading as="h2" size="xl" fontFamily="Gill Sans, sans-serif">
                through Education
              </Heading>
              <Text
                m="26px 7px"
                lineHeight="150%"
                fontFamily="Gill Sans, sans-serif"
              >
                Welcome to our homepage where we introduce our skills in a
                personalized and effective way. Join our program today and
                experience the power of AI technology in language learning.
              </Text>
              <Link href="/education/category-select">
                <Button
                  colorScheme="blue"
                  w="350px"
                  fontFamily="Gill Sans, sans-serif"
                >
                  Start a Conversation{" "}
                </Button>
              </Link>
            </div>
            <div style={{ width: "500px" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
