// import classes from "./Contact.module.css";

// const Contact = () => {
//   async function SubmitHandler(check) {

//     const response = await fetch(
//       "https://contact01-bceab-default-rtdb.firebaseio.com",
//       {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   }
//   return (
//     <section className={classes.section1}>
//       <h1>Contact US</h1>
//       <label>Name</label>
//       <input type="text" required />
//       <label>Email</label>
//       <input type="email" required />
//       <label>Phone</label>
//       <input type="text" required />
//       <button onClick={SubmitHandler}>Submit</button>
//     </section>
//   );
// };

// export default Contact;

import React, { Fragment, useRef } from "react";
import classes from './Contact.module.css';

const Contact = (props) => {
  const usernameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  async function submitHandler(event) {
    event.preventDefault();
    const contact = {
      name: usernameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    console.log(contact);

    const response = await fetch(
      "https://contact01-bceab-default-rtdb.firebaseio.com//contact.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <Fragment>
      <h1 className={classes.h1}>Connect with us</h1>
      <form onSubmit={submitHandler} className={classes.section1}>
        <label> Name</label>
        <input
          id="username"
          type="text"
          name="username"
          ref={usernameRef}
          required
        />
        <label> EmailId</label>
        <input id="email" type="email" name="emailId" ref={emailRef} required />
        <label> Phone Number</label>
        <input id="phonenumber" type="tel" name="phonenumber" ref={phoneRef} />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default Contact;
