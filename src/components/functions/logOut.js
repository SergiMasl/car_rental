const logOut = () => {
  console.log("d");
  localStorage.removeItem("is_login");
  return true;
};
export default logOut;
