import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Videos from "../Videos";
function Home() {
  const { currentUser } = useAuth();
  return currentUser?(<Videos />):(<Navigate to='/login'/>);
}

export default Home;
