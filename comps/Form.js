import { useState } from "react";
import { useRouter } from "next/router";

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [btnText, setBtnText] = useState("Send");
  const [error, setError] = useState();

  const router = useRouter();

  // const INITIAL_FORM = {
  //   fullName: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // };

  const validate = (name, email, subject, message) => {
    const errors = [];

    if (name.length === 0) {
      errors.push("Name can't be empty");
    }

    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }

    if (subject.length < 2) {
      errors.push("Subject should be at least 6 characters long");
    }

    if (message.length < 2) {
      errors.push("Message should be at least 2 character long");
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(fullname, email, subject, message);
    console.log(errors);
    if (errors.length > 0) {
      console.log("not correct");
      setError(
        "Please check that you are entering the correct information in all fields"
      );
      setTimeout(function () {
        setError("");
      }, 5000);
    } else {
      setBtnText("Sending...");

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
        if (res.status === 200) {
          localStorage.setItem('headingText', "We recieved your message.");
          localStorage.setItem('subText', "We will get back to you shortly");
      
          router.push("/confirmation");
          setBtnText("Send");
          setSubmitted(true);
          setFullname("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else if (response.status !== 200) {
          localStorage.setItem('headingText', "Message Sending Failed!");
          localStorage.setItem('subText', "An error occurred and the form wasn't submitted.");
          router.push("/confirmation");
          setButtonText("Send");
          setSubmitted(true);
          setFullname("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      });
    }
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
        <p className="py-4 text-v-green">{error}</p>
      </form>
    </section>
  );
};

export default Form;
