import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Head>
        <title>Spotify 2.0</title>
      </Head>
      <main>
        {/* Side Bar */}
        <Sidebar />
        {/* center  */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
