type ContactMeProps = {
  contactVisible: boolean;
  setContactVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactMe(props: ContactMeProps) {
  const { contactVisible, setContactVisible } = props;

  const hiddenStyles = "hidden";
  const visibleStyles = "visible";

  return (
    <div
      className={
        `absolute left-1/2 top-20 z-20 w-8/12 min-w-[300px] max-w-[800px] -translate-x-1/2 p-5 lg:top-44 ` +
        `rounded-lg border-[1px] border-[rgba(0,0,0,.1)] bg-white drop-shadow-lg will-change-[filter] ` +
        `${contactVisible ? visibleStyles : hiddenStyles}`
      }
    >
      <h1 className="text-xl font-bold lg:text-3xl">Contact Me</h1>
      <p className="mb-3 text-sm lg:text-lg">
        or checkout{" "}
        <a
          href="https://www.linkedin.com/in/waledkhatiz"
          className="text-blue-500 underline hover:font-bold"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href="https://www.github.com/wkhatiz"
          className="text-blue-500 underline hover:font-bold"
        >
          GitHub
        </a>
      </p>
      <form action="https://formspree.io/f/xnqkorrg" method="POST">
        <div
          id="contact_field_cont"
          className="flex w-full flex-col justify-normal md:flex-row md:justify-between"
        >
          <input
            type="email"
            id="contact_email"
            name="email"
            className="mb-4 block w-full rounded-md border-[1px] border-gray-400 p-2 md:mr-2 lg:text-lg"
            placeholder="Your Email"
          ></input>
          <input
            type="text"
            id="contact_name"
            name="name"
            className="mb-4 block w-full rounded-md border-[1px] border-gray-400 p-2 md:ml-2 lg:text-lg"
            placeholder="Your Name"
          ></input>
        </div>
        <input
          type="subject"
          id="contact_subject"
          name="subject"
          className="mb-4 block w-full rounded-md border-[1px] border-gray-400 p-2 lg:text-lg"
          placeholder="Subject"
        ></input>
        <textarea
          id="contact_message"
          name="body"
          className="mb-4 block h-[100px] w-full overflow-y-scroll rounded-md border-[1px] border-gray-400 p-2 lg:text-lg "
          placeholder="Insert your message here"
        ></textarea>
        <div
          id="contact_button_cont"
          className="flex w-full max-w-[300px] justify-between"
        >
          <button
            id="contact_close"
            onClick={(e) => {
              e.preventDefault();
              setContactVisible(false);
            }}
            className={
              "mb-3 mr-2 block flex-1 rounded-md bg-gray-400 font-bold " +
              "cursor-pointer p-2 text-white drop-shadow-md hover:bg-gray-600 lg:w-56 lg:text-xl"
            }
          >
            Cancel
          </button>
          <input
            type="submit"
            name="submit"
            id="contact_submit"
            className={
              "mb-3 ml-2 block flex-1 rounded-md bg-rose-500 font-bold " +
              "cursor-pointer p-2 text-white drop-shadow-md hover:bg-rose-700 lg:w-56 lg:text-xl"
            }
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
