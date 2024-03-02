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
        <span className="opacity-50 hover:opacity-100 transition-opacity duration-300">
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

        <div className="w-full flex justify-between mb-2 mt-5">
          <input
            id="contactme-name"
            placeholder="Your Name"
            type="text"
            className="border-2 rounded-md py-2 px-3 flex-1 mr-1"
          ></input>
          <input
            id="contactme-email"
            placeholder="Your Email"
            type="email"
            name="_replyto"
            className="border-2 rounded-md py-2 px-3 flex-1 ml-1"
          ></input>
        </div>
        <input
          id="contactme-subject"
          placeholder="Subject"
          type="text"
          name="_subject"
          className="border-2 rounded-md py-2 px-3 w-full mb-2"
        ></input>
        <textarea
          id="contactme-body"
          placeholder="Insert your message here"
          name="message"
          className="border-2 rounded-md py-2 px-3 w-full h-32 mb-4 resize-none overflow-scroll"
        ></textarea>
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <div>
          <input
            type="submit"
            value="Submit"
            className="bg-rose-600 text-lg py-2 px-8 font-bold text-white rounded-lg hover:bg-rose-800 cursor-pointer mr-2"
          ></input>
          <button
            onClick={onClickClose}
            className="bg-gray-500 text-lg py-2 px-8 font-bold text-white rounded-lg hover:bg-gray-700 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
