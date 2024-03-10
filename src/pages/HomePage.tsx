type HomePageProps = {
  contactVisible: boolean;
  setContactVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function HomePage(props: HomePageProps) {
  const { contactVisible, setContactVisible } = props;
  const accStyles = "text-rose-500 hover:text-rose-700 cursor-pointer";

  return (
    <div className="flex flex-1 flex-col justify-center bg-stone-200 p-7 lg:p-14 xl:p-24">
      <h1 className="pb-5 text-5xl font-bold text-sky-900 md:text-7xl lg:text-8xl 2xl:text-9xl">
        Hi! I'm <span className={accStyles}>Waled</span>
      </h1>
      <h2
        className={
          "max-w-[300px] pb-10 text-2xl font-bold text-sky-900 md:max-w-[500px] " +
          "md:text-4xl lg:max-w-[800px] lg:pb-24 xl:text-6xl"
        }
      >
        I like to <span className={accStyles}>build website</span> then
        <span className={accStyles}> destroy them</span>
      </h2>
      <button
        onClick={() => setContactVisible(!contactVisible)}
        className={
          "w-44 rounded-md bg-rose-500 px-4 py-3 text-xl font-bold " +
          "text-white drop-shadow-md transition-transform hover:-rotate-3 hover:bg-rose-700 2xl:w-56 2xl:text-3xl"
        }
      >
        Contact Me
      </button>
    </div>
  );
}

export default HomePage;
