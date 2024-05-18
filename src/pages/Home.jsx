import Title from "../Components/Title";
const Home = () => {
  return (
    <div className="w-full lg:h-screen bg-gradient-to-bl text-center flex flex-col items-center lg:py-32 md:py-24 py-16 from-zinc-900 to-blue-900 text-white">
      <Title
        title={
          "CWR Components - Streamline Your Projects with Customizable Components"
        }
        description={
          "Discover CWR Components, your go-to library for high-quality, customizable components designed to save you time and enhance your projects. Perfect for developers and designers, our intuitive components simplify your workflow and elevate your work. Stay tuned for our launch and revolutionize your development process with CWR Components."
        }
      />
      <h1 className="text-3xl font-light tracking-widest">CWR - COMPONENTS</h1>
      <div className="flex flex-col items-center lg:mt-20 md:mt-16 mt-10">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold">
          Coming Soon: Your Ultimate Component Library
        </h1>
        <p className="lg:w-2/3 lg:text-xl mt-10 px-10">
          We're excited to announce the upcoming launch of our comprehensive
          Component Library! Designed with efficiency in mind, our library
          offers a diverse range of pre-built, customizable components that will
          streamline your workflow and save you valuable time. Whether you're a
          developer looking to enhance your projects or a designer seeking
          seamless integrations, our library has something for everyone. Stay
          tuned for more updates and get ready to elevate your work with our
          intuitive, user-friendly components. Your next project just got a
          whole lot easier!
        </p>
        <div className="w-full px-10 mt-10">
          <a
            href="https://codewithraju.vercel.app"
            target="_blank"
            className="py-3 px-6 inline-block rounded-md bg-white text-black font-bold lg:w-auto md:w-auto sm:w-auto w-full hover:text-white hover:bg-blue-800 transition-all duration-500"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
