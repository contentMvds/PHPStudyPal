import { baseUrl } from "../config/config";

export const signupService = async (password, email) => {
  const response = await fetch(`${baseUrl}api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      password: password,
      email: email,
    }),
  });
  const rest = await response.json();
  return rest;
};
