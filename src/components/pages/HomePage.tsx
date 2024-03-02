import { useState, useEffect } from "react";

type HomePageProps = {
  setContactMeVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function HomePage(props: HomePageProps) {
  let { setContactMeVisible } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [bounceOn, setBounceOn] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  function onContactMeClick() {
    setContactMeVisible(true);
  }

  return (
    <div
      className={`h-full flex justify-center items-start pl-20 flex-col transition-opacity duration-1000 z-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1
        className={`text-8xl font-bold text-slate-800 mb-5 ${
          bounceOn ? "animate-bounce" : ""
        }`}
      >
        Hi I'm{" "}
        <span
          onClick={() => {
            setBounceOn(!bounceOn);
          }}
          className=" text-rose-600 cursor-pointer hover:text-rose-700"
        >
          Waled
        </span>
      </h1>
      <h2 className="text-5xl font-bold text-slate-800 w-[700px] mb-10">
        I like to{" "}
        <span className=" text-rose-600 cursor-pointer hover:text-rose-700">
          build websites
        </span>{" "}
        then{" "}
        <span className=" text-rose-600 hover:text-rose-700 cursor-pointer">
          destroy them
        </span>
      </h2>
      <button
        onClick={onContactMeClick}
        className="bg-rose-600 text-xl py-2 px-4 font-bold text-white rounded-lg hover:bg-rose-800 cursor-pointer transition-transform duration-500 hover:-rotate-3"
      >
        Contact Me
      </button>
    </div>
  );
}

export default HomePage;
