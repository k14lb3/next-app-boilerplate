import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Next.js app boilerplate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center justify-center bg-[#121212] text-center">
        <h1 className="text-2xl font-bold text-white">
          Next.js App Boilerplate
        </h1>
        <h2 className="mt-2 text-white">(⌐■_■)</h2>
      </main>
    </>
  );
};

export default Home;
