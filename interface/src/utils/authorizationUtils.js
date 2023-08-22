
/**
 * Builds an authorization header using the provided token.
 *
 * @param {string} token - The token used for authorization.
 * @return {Object} The headers object containing the authorization header.
 */
export const buildAuthorizationHeader = (token) => {
    return {
      Authorization: `Bearer ${token}`,
    };
  };

