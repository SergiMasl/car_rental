const logOut = () => {
  localStorage.removeItem("is_login");
  return true;
};
export default logOut;
