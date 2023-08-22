export const getToken = async () => {
  const token = await localStorage.getItem("token");
  console.log(token)
  return token;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
}

export const checkTokenExists = ()  => {
  const token = localStorage.getItem("token");
  return token !== null;
}

