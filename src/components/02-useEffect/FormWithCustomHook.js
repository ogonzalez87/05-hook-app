import React, { useEffect } from "react";
import { Message } from "./Message";
import "./effects.css";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: '',
  });

  const { name, email ,password} = formValues;

  
  useEffect(() => {
    console.log("email!");
  }, [email]);

   
const handleSubmit = (e) => {
  e.preventDefault();

  console.log(formValues);
}

  return (
    <form onSubmit = {handleSubmit}   >
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="******" 
          value={password}
          onChange={handleInputChange}
        />
       
      </div>

      {name=== '123' && <Message />}


      <button  type = 'submit' className = "btn btn-primary" >
        Guardar
      </button>
    </form>
  );
};
