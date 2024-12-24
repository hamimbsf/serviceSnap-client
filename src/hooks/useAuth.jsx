import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvder";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default useAuth;
