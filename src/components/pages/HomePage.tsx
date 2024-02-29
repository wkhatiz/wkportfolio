import { useState, useEffect } from "react";

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`h-full flex justify-center items-start pl-20 flex-col transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-8xl font-bold text-slate-800 mb-5">
        Hi I'm{" "}
        <span className=" text-rose-600 cursor-pointer hover:text-rose-700">
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
      <button className="bg-rose-600 text-xl py-2 px-4 font-bold text-white rounded-lg hover:bg-rose-800 cursor-pointer transition-transform hover:-rotate-3">
        Contact Me
      </button>
    </div>
  );
}

export default HomePage;
