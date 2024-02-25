import { useState } from "react";

function NavBar() {
  let [listValues, setListValues] = useState<
    { text: string; selected: boolean }[]
  >([
    { text: "Home", selected: true },
    { text: "About", selected: false },
    { text: "Work", selected: false },
    { text: "Project", selected: false },
  ]);

  function handleClick(indexSelected: number) {
    setListValues((prevListValues) =>
      prevListValues.map((item, index) => ({
        ...item,
        selected: index === indexSelected,
      }))
    );
  }

  return (
    <nav className="fixed right-0 h-full flex justify-center flex-col mr-5">
      <ul className="h-40 flex justify-between flex-col text-right">
        {listValues.map((listValue, i) => {
          return (
            <a>
              <li
                className={"hover:font-bold cursor-pointer transition-all ".concat(
                  listValue.selected ? "font-bold mr-5" : ""
                )}
                onClick={() => handleClick(i)}
              >
                {listValue.text}
              </li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
