import { baseUrl } from "../config/config";
import { getToken } from "../utils/tokenUtils";
import { buildAuthorizationHeader } from "../utils/authorizationUtils";
/**
 * Registers a user by sending a POST request to the API.
 *
 * @param {string} password - The user's password.
 * @param {string} confirmPassword - The user's password confirmation.
 * @param {string} email - The user's email address.
 * @return {Promise} A promise that resolves to the response from the API.
 */
export const registerUserService = async (password, confirmPassword, email) => {
  const token = await getToken();

  const response = await fetch(`${baseUrl}api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...buildAuthorizationHeader(token),
    },
    body: new URLSearchParams({
      password: password,
      confirm_password: confirmPassword,
      email: email,
    }),
  });
  const rest = await response.json();

  return rest;
};

/**
 * Fetches a list of users from the API.
 *
 * @return {Promise<Array>} An array of user objects.
 */
export const listUsersService = async () => {
  const token = await getToken();

  const response = await fetch(`${baseUrl}api/users`, {
    method: "GET",
    headers: {
      ...buildAuthorizationHeader(token),
    },
  });
  const users = await response.json();

  return users;
};
