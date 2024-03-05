type NavMenuProps = {
  navIndex: number;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
};

function NavMenu(props: NavMenuProps) {
  const { navIndex, setNavIndex } = props;

  const navNames: string[] = ["Home", "About", "Career", "Code"];

  const liActiveStyles =
    "bg-slate-600 md:bg-transparent md:-translate-x-10 md:font-bold xl:translate-x-0";
  const liInactiveStyles =
    "bg-slate-800 hover:bg-slate-900 md:hover:bg-transparent " +
    "md:bg-transparent";

  function menuOptionClickHander(index: number) {
    setNavIndex(index);
  }

  return (
    <nav
      className={
        "pr-2 md:flex md:w-36 md:items-center md:text-right lg:w-40 " +
        "xl:fixed xl:top-0 xl:h-14 xl:w-full xl:justify-end xl:pr-14 " +
        "xl:max-w-[1920px] 2xl:h-20"
      }
    >
      <ul className="md:w-full">
        {navNames.map((name, i) => {
          return (
            <li
              key={i}
              onClick={() => menuOptionClickHander(i)}
              className={
                `text-md w-full cursor-pointer p-3 text-xl text-white transition-all ` +
                `md:text-black md:hover:font-bold xl:ml-10 xl:inline ` +
                `2xl:text-2xl ${i === navIndex ? liActiveStyles : liInactiveStyles} `
              }
            >
              {name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMenu;
