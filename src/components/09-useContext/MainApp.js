import React  , {useState}from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {

  // const user = {
  //   id: 1234,
  //   name: 'Fernando',
  //   email: 'fernado.herrera@gmail.com'
  // }
  const [user, setUser] = useState({id: 1234,})
  return (
    <UserContext.Provider value = {{user,setUser } }>
      <AppRouter />
    </UserContext.Provider>
  );
};
