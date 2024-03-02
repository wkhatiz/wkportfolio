import { MouseEvent } from "react";

type ContactMeProps = {
  contactMeVisible: boolean;
  setContactMeVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactMe(props: ContactMeProps) {
  const { contactMeVisible, setContactMeVisible } = props;

  function onClickClose(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setContactMeVisible(false);
  }

  return (
    <div
      className={`absolute left-1/2 top-1/2 z-10 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-10 ${
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
        <span className="opacity-50 transition-opacity duration-300 hover:opacity-100">
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

        <div className="mb-2 mt-5 flex w-full justify-between">
          <input
            id="contactme-name"
            placeholder="Your Name"
            type="text"
            className="mr-1 flex-1 rounded-md border-2 px-3 py-2"
          ></input>
          <input
            id="contactme-email"
            placeholder="Your Email"
            type="email"
            name="_replyto"
            className="ml-1 flex-1 rounded-md border-2 px-3 py-2"
          ></input>
        </div>
        <input
          id="contactme-subject"
          placeholder="Subject"
          type="text"
          name="_subject"
          className="mb-2 w-full rounded-md border-2 px-3 py-2"
        ></input>
        <textarea
          id="contactme-body"
          placeholder="Insert your message here"
          name="message"
          className="mb-4 h-32 w-full resize-none overflow-scroll rounded-md border-2 px-3 py-2"
        ></textarea>
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <div>
          <input
            type="submit"
            value="Submit"
            className="mr-2 cursor-pointer rounded-lg bg-rose-600 px-8 py-2 text-lg font-bold text-white hover:bg-rose-800"
          ></input>
          <button
            onClick={onClickClose}
            className="cursor-pointer rounded-lg bg-gray-500 px-8 py-2 text-lg font-bold text-white hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
