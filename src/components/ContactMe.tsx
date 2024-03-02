type ContactMeProps = {
  contactMeVisible: boolean;
  setContactMeVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactMe(props: ContactMeProps) {
  const { contactMeVisible, setContactMeVisible } = props;

  function onClickClose(e: any) {
    e.preventDefault();
    setContactMeVisible(false);
  }

  return (
    <div
      className={`w-[800px] bg-white rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 z-10 ${
        contactMeVisible
          ? "visible transition-opacity duration-300"
          : "invisible"
      }`}
      style={{
        transitionProperty: "opacity, visibility",
        opacity: contactMeVisible ? 1 : 0,
      }}
    >
      <form action="https://formspree.io/f/xnqkorrg" method="POST">
        <h2 className="text-2xl font-bold text-slate-800">
          Shoot Me A Message
        </h2>
        <span className="transition-opacity duration-300 opacity-50 hover:opacity-100">
          or visit my{" "}
          <a
            className="text-blue-500 underline hover:text-blue-700"
            href="https://www.linkedin.com/in/waledkhatiz"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            className="text-blue-500 underline hover:text-blue-700"
            href="https://www.github.com/wkhatiz"
          >
            GitHub
          </a>
        </span>

        <div className="flex justify-between w-full mt-5 mb-2">
          <input
            id="contactme-name"
            placeholder="Your Name"
            type="text"
            className="flex-1 px-3 py-2 mr-1 border-2 rounded-md"
          ></input>
          <input
            id="contactme-email"
            placeholder="Your Email"
            type="email"
            name="_replyto"
            className="flex-1 px-3 py-2 ml-1 border-2 rounded-md"
          ></input>
        </div>
        <input
          id="contactme-subject"
          placeholder="Subject"
          type="text"
          name="_subject"
          className="w-full px-3 py-2 mb-2 border-2 rounded-md"
        ></input>
        <textarea
          id="contactme-body"
          placeholder="Insert your message here"
          name="message"
          className="w-full h-32 px-3 py-2 mb-4 overflow-scroll border-2 rounded-md resize-none"
        ></textarea>
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <div>
          <input
            type="submit"
            value="Submit"
            className="px-8 py-2 mr-2 text-lg font-bold text-white rounded-lg cursor-pointer bg-rose-600 hover:bg-rose-800"
          ></input>
          <button
            onClick={onClickClose}
            className="px-8 py-2 text-lg font-bold text-white bg-gray-500 rounded-lg cursor-pointer hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
