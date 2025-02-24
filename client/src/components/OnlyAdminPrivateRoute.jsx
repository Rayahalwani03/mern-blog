import { useSelector } from "react-redux"; 
import { Outlet, Navigate } from "react-router-dom"; // the children from the app 
// Navigate is a component but useNavigate is a hook 
const OnlyAdminPrivateRoute = () => { 
const { currentUser } = useSelector((state) => state.user); 
 
return currentUser.isAdmin ? <Outlet/> : <Navigate to='/sign-in'/> 
}; 
 
export default OnlyAdminPrivateRoute; 
