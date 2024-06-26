import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const server = import.meta.env.VITE_SERVER;

const Test = () => {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [html, setHtml] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${server}/api/v1/subscribe/news/post`, { subject, text, html })
      .then(({ data }) => {
        console.log(data);
        toast.success(data?.message);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        toast.error(err?.response?.data?.message);
      });
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-bl text-center lg:py-32 md:py-~24 py-16 from-zinc-900 to-blue-900">
      <div className="w-[30rem] py-20 px-10 rounded-3xl bg-blue-950 text-white">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full bg-transparent border rounded-lg p-2 outline-none"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="text"
            className="w-full bg-transparent border rounded-lg p-2 outline-none mt-2"
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <textarea
            type="text"
            className="w-full bg-transparent border rounded-lg p-2 outline-none mt-2"
            rows={10}
            placeholder="Html"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
          <button className="w-full mt-6 p-3 rounded-lg bg-gray-900 font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Test;
