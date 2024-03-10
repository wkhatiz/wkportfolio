import { useState } from "react";
import NavMenu from "./components/NavMenu";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import CodePage from "./pages/CodePage";
import ContactMe from "./components/ContactMe";

function App() {
  const [navIndex, setNavIndex] = useState<number>(0);
  const [contactVisible, setContactVisible] = useState<boolean>(false);
  const pageComponents = [
    <HomePage
      contactVisible={contactVisible}
      setContactVisible={setContactVisible}
    />,
    <AboutPage />,
    <CareerPage />,
    <CodePage />,
  ];

  return (
    <div
      className={
        "z-10 mx-auto flex h-dvh w-full flex-col justify-between bg-stone-200 md:flex-row " +
        "xl:max-w-[1920px]"
      }
    >
      <ContactMe
        contactVisible={contactVisible}
        setContactVisible={setContactVisible}
      />
      {pageComponents[navIndex]}
      <NavMenu navIndex={navIndex} setNavIndex={setNavIndex} />
    </div>
  );
}

export default App;
