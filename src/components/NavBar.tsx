type NavBarProps = {
  menuSelected: { text: string; selected: boolean }[];
  setMenuSelected: React.Dispatch<
    React.SetStateAction<{ text: string; selected: boolean }[]>
  >;
};

function NavBar(props: NavBarProps) {
  const { menuSelected, setMenuSelected } = props;

  function onMenuItemClick(indexClicked: number) {
    setMenuSelected((prevListValues) =>
      prevListValues.map((item, index) => ({
        ...item,
        selected: index === indexClicked,
      })),
    );
  }

  return (
    <nav className="flex h-full w-40 items-center justify-end">
      <ul className="flex h-56 w-full flex-col justify-between">
        {menuSelected.map((menuItem, i) => {
          return (
            <li
              key={i}
              className={"cursor-pointer text-right text-2xl transition-all ".concat(
                menuItem.selected ? "mr-10 font-bold" : "mr-5",
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
