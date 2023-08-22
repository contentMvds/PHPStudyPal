import { baseUrl } from "../config/config";
import { getToken } from "../utils/tokenUtils";
import { buildAuthorizationHeader } from "../utils/authorizationUtils";

/**
 * Retrieves a list of students from the server.
 *
 * @return {Promise<Array>} The list of students.
 */
export const listStudentsService = async () => {
  const token = await getToken();
  const response = await fetch(`${baseUrl}api/students`, {
    method: "GET",
    headers: {
      ...buildAuthorizationHeader(token),
    },
  });
  const rest = await response.json();
  return rest;
};
/**
 * Fetches a student's information from the server based on their ID.
 *
 * @param {number} id - The ID of the student.
 * @return {Promise} A promise that resolves to the student's information.
 */
export const listByIdStudentService = async (id) => {
  const token = await getToken();
  const response = await fetch(`${baseUrl}api/students/${id}`, {
    method: "GET",
    headers: {
      ...buildAuthorizationHeader(token),
    },
  });
  const rest = await response.json();
  return rest;
};
/**
 * Updates a student's information in the database.
 *
 * @param {number} id - The ID of the student to be updated.
 * @param {string} nome - The new name of the student.
 * @param {string} email - The new email of the student.
 * @param {string} endereco - The new address of the student.
 * @param {string} telefone - The new phone number of the student.
 * @param {string} imagem - The new image of the student.
 * @return {Promise} A Promise that resolves to the updated student information.
 */
export const editStudentsService = async (
  id,
  nome,
  email,
  endereco,
  telefone,
  imagem
) => {
  const token = await getToken();
  const response = await fetch(`${baseUrl}api/students/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      ...buildAuthorizationHeader(token),
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      endereco: endereco,
      telefone: telefone,
      foto: imagem,
    }),
  });
  const rest = await response.json();
  return rest;
};
/**
 * Deletes a student from the server.
 *
 * @param {number} id - The ID of the student to be deleted.
 * @return {Promise<Object>} - A promise that resolves to the response from the server.
 */
export const deleteStudentsService = async (id) => {
  const token = await getToken();

  const response = await fetch(`${baseUrl}api/students/${id}`, {
    method: "DELETE",
    headers: {
      ...buildAuthorizationHeader(token),
    },
  });
  const rest = await response.json();
  return rest;
};
export const createStudentsService = async (
  nome,
  email,
  telefone,
  endereco,
  imagem
) => {
  const token = await getToken();

  const response = await fetch(`${baseUrl}api/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...buildAuthorizationHeader(token),
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      telefone: telefone,
      endereco: endereco,
      foto: imagem,
    }),
  });
  const rest = await response.json();
  return rest;
};
