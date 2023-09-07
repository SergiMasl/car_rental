const setSing = (e) => {
  console.log(e);
  localStorage.setItem("username", e[0]);
  localStorage.setItem("password", e[1]);
  localStorage.setItem("email", e[2]);
  return true;
};

export default setSing;
