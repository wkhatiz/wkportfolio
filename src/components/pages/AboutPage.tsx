import { useState, useEffect } from "react";

function AboutPage() {
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
      <p className=" w-3/4">
        I'm a passionate software developer with a keen interest in creating
        efficient, scalable, and innovative solutions. With [X years] of
        experience in the industry, I've had the opportunity to work on a
        variety of projects, ranging from web and mobile applications to machine
        learning algorithms.
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
        <br /> Outside of coding, I enjoy [hobbies/interests], which helps me
        stay creative and bring fresh perspectives to my work. I'm also a strong
        advocate for [relevant cause or technology], always looking for ways to
        contribute to the community and make a positive impact. I'm currently
        seeking new opportunities where I can leverage my skills and experience
        to [your goal or mission]. If you're looking for a dedicated and
        versatile software developer, I'd love to connect!
      </p>
    </div>
  );
}

export default AboutPage;
