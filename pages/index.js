import Head from "next/head";
import { Header, HomeScreen, ContactUs, ChatBot, Footer } from "../Components";
import globalStore from "../Store/globalStore";
import { observer } from "mobx-react";

const Home = observer(() => {
  return (
    <div className={"container"}>
      <Head>
        <title>WebExpertAgency-Build Your Business Online.</title>
        <meta name="Digital Marketing" content="S" />
        <link rel="icon" sizes="180x180" href="/icon.png" />
      </Head>

      <main className={"main"}>
        <Header />
        {globalStore.activePage === "Home" && <HomeScreen />}
        {globalStore.activePage === "ContactUs" && <ContactUs />}
        {/* <ChatBot /> */}
      </main>
      <Footer />
    </div>
  );
});

export default Home;
