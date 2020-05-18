export const isLogged = () => {
  const token = localStorage.getItem("isLogged");
  return !!token;
};

export const userLogOut = () => {
  localStorage.removeItem("isLogged");
};
