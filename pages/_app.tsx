import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import { ReduxProviders } from "@/redux/ReduxProviders";
import { Toaster } from "react-hot-toast";

const LoadingPage = dynamic(() => import("@/components/shared/LoadingPage"));

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  const [loader, setLoader] = useState<boolean>(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      // console.log("Router is changing");
      setLoader(true);
    });

    router.events.on("routeChangeComplete", () => {
      // console.log("Router is changed");
      setLoader(false);
    });
  }, [router.events]);

  return (
    <main className={poppins.className}>
      <Head>
        <title>Charm Group</title>
      </Head>

      <ReduxProviders>
        {loader && <LoadingPage />}
        <Component {...pageProps} />
      </ReduxProviders>

      <Toaster
        position="top-center"
        reverseOrder={true}
        gutter={8}
        toastOptions={{
          duration: 4000,
        }}
      />
    </main>
  );
}
