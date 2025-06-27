import { createContext } from "react";

const UserContext = createContext({
  loggedIN: "Default User",
});

export default UserContext;
