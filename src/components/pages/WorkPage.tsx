import { useState, useEffect } from "react";

function WorkPage() {
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
      <img src="Infosys_logo.svg.png" className=" h-14 mb-3"></img>
      <h2 className="text-4xl font-bold text-slate-800 w-[700px] mb-2">
        Infosys Limited Australia
      </h2>
      <p className="mb-8 text-slate-800 w-3/4">
        Lead Tester and QA Engineer on the Infosys SIT team, responsible for
        both functional and non-functional testing and test automation for
        Infosys clients. 2 years of experience using tools such as Selenium,
        Robot Framework, JMeter and LoadRunner to gather metrics accurately
        measuring the quality of software products.
        <br />
        <br /> Mentor and trainer for new testers as well as SME for existing
        testers across teams, creating documentation for project specific skills
        as well as global testing skills for testers to refer to.
        <br />
        <br /> Automated test case creation and test evidence creation using VBA
        macros and powershell scripts which improved the tester experience,
        reduced test preparation efforts and test execution times
      </p>
      <img src="IBM_logo.svg.png" className=" h-12 mb-5"></img>
      <h2 className="text-4xl font-bold text-slate-800 w-[700px] mb-2">
        IBM Chicago
      </h2>
      <p className="text-slate-800 w-3/4">
        A volunteer project as part of my academics at Western Sydney University
        which involved contributing to the IBM Watson Astronomy Assistant app.
        The app was built in React Native and would provide a IM like interface
        where users could interface with the IBM Watson API to gather real-time
        astronomy related information with photo integration and other forms of
        media.
        <br />
        <br /> My contributions involved accessibility features such as TTS,
        Dictation and various themes for vision impaired users. The app was
        presented to a team of IBM Chicago engineers who were overall impressed
        with the teams efforts.
      </p>
    </div>
  );
}

export default WorkPage;
