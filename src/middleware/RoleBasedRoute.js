import { useNavigate } from "react-router-dom";

const RoleBasedRoute = ({ role, allowedRoles, children }) => {
  const navigation = useNavigate();

  if (!allowedRoles.includes(role)) {
    return navigation("*");
  }
  return children;
};

export default RoleBasedRoute;
