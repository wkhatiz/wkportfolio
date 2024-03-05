import { useState } from "react";
import NavMenu from "./components/NavMenu";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import CodePage from "./pages/CodePage";

function App() {
  const [navIndex, setNavIndex] = useState<number>(0);
  const pageComponents = [
    <HomePage />,
    <AboutPage />,
    <CareerPage />,
    <CodePage />,
  ];
  return (
    <div
      className={
        "mx-auto flex h-dvh w-full flex-col justify-between md:flex-row " +
        "xl:max-w-[1920px]"
      }
    >
      {pageComponents[navIndex]}
      <NavMenu navIndex={navIndex} setNavIndex={setNavIndex} />
    </div>
  );
}

export default App;
