import { useState } from "react";
import { useRouter } from 'next/router'

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [btnText, setBtnText] = useState("Send");

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText("Sending...")


    let data = {
      fullname,
      subject,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        
        router.push({
          pathname: '/confirmation',
          query: { headingText: "Thanks! Your message was sent.", text: "I will get back to you really soon!" },
        })
        setBtnText("Send");
        setSubmitted(true);
        setFullname("");
        setEmail("");
        setSubject("")
        setMessage("");
      }
      else if (response.status !== 200) {
        router.push({
          pathname: '/confirmation',
          query: { headingText: "Message Sending Failed!", text: "An error occurred and the form wasn't submitted." },
        })
        setButtonText("Send");
        setSubmitted(true);
        setFullname("");
        setEmail("");
        setSubject("")
        setMessage("");
      }
    });
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="my-20 pt-14 pb-24  w-9/12 lg:w-7/12 mx-auto relative rounded-lg shadow-xl flex flex-col px-12  bg-white dark:bg-blue-500"
      >
        <h1 className="text-2xl font-bold dark:text-gray-50">
          Please send us a message.
        </h1>

        <label
          htmlFor="fullname"
          name="fullname"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Full name<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
          htmlFor="email"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
          htmlFor="subject"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />

        <label
          htmlFor="message"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        ></textarea>
        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="absolute bottom-5 right-7 px-10 mt-14 py-2 bg-v-green text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
          >
            {btnText}
           
              
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
