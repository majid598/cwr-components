import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const server = import.meta.env.VITE_SERVER;

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const data = { email };
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await axios
      .post(`${server}/api/v1/subscribe/new`, data)
      .then(({ data }) => {
        console.log(data);
        setIsLoading(false);
        setEmail("");
        toast.success(data?.message);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setIsLoading(false);
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <div className={`w-full bg-blue-900 text-white px-20 py-10`}>
      <div className="flex lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center w-full justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-widest uppercase">
            CWR - Components
          </h2>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold">News Letter</h1>
          <p className="text-sm">
            Subscribe Our News Letter To Get All Updates
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <input
              type="email"
              className={`px-2 py-3 outline-none rounded-lg bg-transparent border-b-2 border-r-2 border-t border-l border-white/30 focus:border-white/70 transition-all duration-300`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <button className="px-4 py-3 rounded-lg text-white bg-red-600 font-bold hover:bg-red-700 transition-all duration-300 border-b-2 border-r-2 border-t border-l border-white/70">
              {isLoading ? <Loader /> : "Subscribe"}
            </button>
          </form>
          <div className="flex gap-4 mt-10">
            <a
              href="https://x.com/MajidA56934"
              target="_blank"
              className="p-2 border rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              {" "}
              <FaTwitter />{" "}
            </a>
            <a
              href="https://www.instagram.com/code_with_raju01/"
              target="_blank"
              className="p-2 border rounded-md hover:bg-white hover:text-pink-600 transition-all duration-300"
            >
              {" "}
              <FaInstagram />{" "}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61553142673447"
              target="_blank"
              className="p-2 border rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              {" "}
              <FaFacebookF />{" "}
            </a>
            <a
              href="https://www.youtube.com/@MajidAli-ju9bn"
              target="_blank"
              className="p-2 border rounded-md hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              {" "}
              <FaYoutube />{" "}
            </a>
            <a
              href="https://github.com/majid598"
              target="_blank"
              className="p-2 border rounded-md hover:bg-white hover:text-zinc-700 transition-all duration-300"
            >
              {" "}
              <FaGithub />{" "}
            </a>
            <a
              href="https://www.fiverr.com/majidali571?up_rollout=true"
              target="_blank"
              className="p-2 border rounded-md hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              {" "}
              <TbBrandFiverr />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Loader = () => {
  return (
    <div className="px-6">
      <div className="loader w-6 h-6 rounded-full border-2 border-zinc-500 border-t-white"></div>
    </div>
  );
};
