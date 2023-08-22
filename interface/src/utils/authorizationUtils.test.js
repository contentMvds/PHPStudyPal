import { buildAuthorizationHeader } from './authorizationUtils';

describe('buildAuthorizationHeader', () => {
  it('should build the authorization header with the given token', async () => {
    const token = 'exampleToken';
    const expectedHeaders = {
      Authorization: `Bearer ${token}`,
    };

    const result = await buildAuthorizationHeader(token);

    expect(result).toEqual(expectedHeaders);
  });
});
