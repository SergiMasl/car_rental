const getLogIn = (e) => {
  if (
    localStorage.getItem("username") == e[0] &&
    localStorage.getItem("password") == e[1]
  ) {
    localStorage.setItem("is_login", true);
    return true;
  } else {
    return false;
  }
  return false;
};

export default getLogIn;
