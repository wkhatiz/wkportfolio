import { useState, useEffect } from "react";

type AboutPageProps = {
  setContactMeVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function AboutPage(props: AboutPageProps) {
  let { setContactMeVisible } = props;

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
      <h2 className="text-5xl font-bold text-slate-800 w-[700px] mb-5">
        About Me
      </h2>
      <p className="w-3/4 ">
        I'm a passionate Software Engineer currently working in QA with over 2
        years of experience in the industry and strong background in web
        development. Through my academic and professional experience, I've been
        able to help build a wide variety of software solutions from web and
        mobile applications using React and React Native, to AI opponents for
        chess games in C++.
        <br />
        <br /> My journey into software development started with a fascination
        for technology and a drive to understand how things work behind the
        scenes. This curiosity has led me to constantly explore new technologies
        and frameworks, always eager to expand my skill set and tackle new
        challenges.
        <br />
        <br /> I believe that great software is not just about writing code, but
        also about understanding the needs of users and creating solutions that
        are intuitive, elegant, and user-friendly. Whether it's designing a
        responsive web interface or optimizing database performance, I strive
        for excellence in everything I do.
        <br />
        <br /> Outside of coding, I enjoy illustration and design, which helps
        me stay creative and bring fresh perspectives to my work. I'm currently
        seeking new opportunities where I can leverage my skills and experience
        to help build the next era of web technologies. If you're looking for a
        dedicated and versatile software developer, I'd love to{" "}
        <span
          className="font-bold cursor-pointer text-rose-600"
          onClick={() => {
            setContactMeVisible(true);
          }}
        >
          connect
        </span>
        !
      </p>
    </div>
  );
}

export default AboutPage;
