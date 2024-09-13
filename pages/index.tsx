import ChatBox from "@/components/chat/ChatBox";
import Header from "@/components/Header";
import "../i18next-config";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-grow flex items-center justify-center p-6">
        <ChatBox />
      </main>
    </div>
  );
}
