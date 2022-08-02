import Head from "next/head";
import { useState } from "react";
import { Header, HomeScreen, ContactUs } from "../Components";

export default function Home() {
  const [activePage, setActivePage] = useState("Home");
  return (
    <div className={"container"}>
      <Head>
        <title>WebExpertAgency-Build Your Business Online.</title>
        <meta name="Digital Marketing" content="S" />
        <link rel="icon" sizes="180x180" href="/icon.png" />
      </Head>

      <main className={"main"}>
        <Header activePage={activePage} setActivePage={setActivePage} />
        {activePage === "Home" && <HomeScreen />}
        {activePage === "ContactUs" && <ContactUs />}
      </main>

      <footer className={"footer"}></footer>
    </div>
  );
}
