type NavBarProps = {
  menuSelected: { text: string; selected: boolean }[];
  setMenuSelected: React.Dispatch<
    React.SetStateAction<{ text: string; selected: boolean }[]>
  >;
};

function NavBar(props: NavBarProps) {
  let { menuSelected, setMenuSelected } = props;

  function onMenuItemClick(indexClicked: number) {
    setMenuSelected((prevListValues) =>
      prevListValues.map((item, index) => ({
        ...item,
        selected: index === indexClicked,
      }))
    );
  }

  return (
    <nav className="flex items-center justify-end w-40 h-full">
      <ul className="flex flex-col justify-between w-full h-56">
        {menuSelected.map((menuItem, i) => {
          return (
            <li
              key={i}
              className={"cursor-pointer text-right text-2xl transition-all ".concat(
                menuItem.selected ? "font-bold mr-10" : "mr-5"
              )}
              onClick={() => {
                onMenuItemClick(i);
              }}
            >
              {menuItem.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
