import Github from "@/service/github";
import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  const httpClient = axios.create({
    baseURL: "https://api.github.com",
  });

  const github = new Github(httpClient);

  return (
    <>
      <Head>
        <title>Welcome to Black-Hole </title>
        <link rel="shortcut icon" href="/favicon.ico" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8185415229814052"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} github={github} />
      </ChakraProvider>
    </>
  );
}
