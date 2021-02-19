import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("Hey!");
  }, []);

  useEffect(() => {
    // console.log("formState!");
  }, [formState]);

  useEffect(() => {
    // console.log("email!");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>useEfect</h1>
   
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="usuario@dominio.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name=== '123' && <Message />}
    </div>
  );
};
