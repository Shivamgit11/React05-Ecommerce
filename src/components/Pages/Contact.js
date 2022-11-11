import React, { useRef } from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const usernameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  async function SubmitHandler(check) {
    check.preventDefault();
    console.log(check);

    const check2 = {
      name:  usernameRef.current.value,
      phone: phoneRef.current.value,
      Email: emailRef.current.value,
    }
    

    const response = await fetch(
      "https://contact01-bceab-default-rtdb.firebaseio.com/check.json",
      {
        method: "POST",
        body: JSON.stringify(check2),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <section className={classes.section1}>
      <h1>Contact US</h1>
      <label>Name</label>
      <input  type="text" ref={usernameRef} required />
      <label>Email</label>
      <input type="email" ref={emailRef} required />
      <label>Phone</label>
      <input  type="tel"  ref={phoneRef} required />
      <button onClick={SubmitHandler}>Submit</button>
    </section>
  );
};

export default Contact;


