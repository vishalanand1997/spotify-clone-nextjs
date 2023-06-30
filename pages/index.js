import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
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
