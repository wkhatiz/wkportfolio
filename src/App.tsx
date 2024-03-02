import { SetStateAction, useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import WorkPage from "./components/pages/WorkPage";
import ContactMe from "./components/ContactMe";

function App() {
  const [menuSelected, setMenuSelected] = useState([
    { text: "Home", selected: true },
    { text: "About", selected: false },
    { text: "Work", selected: false },
    { text: "Projects", selected: false },
  ]);

  const [contactMeVisible, setContactMeVisible] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between h-dvh w-dvh bg-stone-200">
        <ContactMe
          contactMeVisible={contactMeVisible}
          setContactMeVisible={setContactMeVisible}
        />
        <div className="flex-1">
          {MenuSwitcher(menuSelected, setContactMeVisible)}
        </div>
        <div>
          <NavBar
            menuSelected={menuSelected}
            setMenuSelected={setMenuSelected}
          />
        </div>
      </div>
    </>
  );
}

function MenuSwitcher(
  menuSelected: { text: string; selected: boolean }[],
  setContactMeVisible: React.Dispatch<SetStateAction<boolean>>
) {
  for (let x = 0; x < menuSelected.length; x++) {
    if (menuSelected[x].selected === true) {
      switch (menuSelected[x].text) {
        case "Home":
          return <HomePage setContactMeVisible={setContactMeVisible} />;
        case "About":
          return <AboutPage setContactMeVisible={setContactMeVisible} />;
        case "Work":
          return <WorkPage />;
        case "Projects":
          return <></>;
          break;
      }
    }
  }
}

export default App;
