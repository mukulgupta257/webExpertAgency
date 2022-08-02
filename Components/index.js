import dynamic from "next/dynamic";

const HomeScreen = dynamic(import("./Home/Home"));
const Header = dynamic(import("./Header/Header"));
const ContactUs = dynamic(import("./Contact/Contact"));
const ChatBot = dynamic(import("./ChatBot/ChatBot"));

export { HomeScreen, Header, ContactUs, ChatBot };
