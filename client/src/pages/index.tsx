import QuizSelect from "@/components/quiz/quizSelect";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import ContactIcon from "@/components/layout/contactIcon";

// const socket = io("http://localhost:5000");

export default function Home() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState<any[]>([]);
  const [data, setData] = useState<{ name: string }[]>([]);

  useEffect(() => {
    fetch("/quizData/studentName.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("JSON取得エラー:", err));
  }, []);

  // const handleSendMessage = () => {
  //   socket.emit("send_massage", { message });
  //   setMessage("");
  // };

  // useEffect(() => {
  //   socket.on("received_message", (data) => {
  //     setList((prev) => [...prev, data]);
  //   });
  //   return () => {
  //     socket.off("received_message");
  //   };
  // }, []);

  return (
    <>
      <div className="text-center flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0 gap-x-10 gap-y-10 md:gap-y-0 justify-center items-center h-screen text-xl font-bold">

          <QuizSelect
            href="nameChangeQuiz"
            imgSrc="nameChange"
            alt="名前並べ替えクイズ画像"
            text="aaa"
          />

          <QuizSelect
            href="iconQuiz"
            imgSrc="itIconQuiz"
            alt="ITアイコンクイズ画像"
            text="ITアイコンクイズ"
          />

          <QuizSelect
            href="wordQuiz"
            imgSrc="itWord"
            alt="IT用語クイズ画像"
            text="IT用語クイズ"
          />

          <QuizSelect
            href="wordQuiz"
            imgSrc="itWord"
            alt="IT用語クイズ画像"
            text="IT用語クイズ"
          />
          <div className="pb-10 md:hidden"></div>
        </div>
        
        <div className="fixed bottom-5 md:right-14 flex items-center justify-center md:justify-end gap-4">
          <ContactIcon
            href="https://www.instagram.com/ds._.nb"
            src="/inst-icon"
            alt="インスタアイコン"
            width={35}
            height={35}
          />

          <ContactIcon
            href="https://github.com/sono-haru"
            src="/github-icon"
            alt="GitHubアイコン"
            width={40}
            height={40}
          />

          <ContactIcon
            href=""
            src="/mail-icon"
            alt="メールアイコン"
            width={35}
            height={35}
          />
          
        </div>
        {/* <input
          type="text"
          placeholder="チャット"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>送信</button> */}
      </div>

      {/* {list.map((chat, index) => (
        <div key={index}>{chat.message}</div>
      ))} */}
    </>
  );
}
