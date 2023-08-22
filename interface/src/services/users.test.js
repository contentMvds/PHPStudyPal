import { RegisterUser, ListUsers } from './users'; 

// Mock para a função fetch
const mockFetch = jest.fn();

beforeAll(() => {
  global.fetch = mockFetch;
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe('RegisterUser', () => {
  it('should register a user', async () => {
    const password = 'password123';
    const confirmPassword = 'password123';
    const email = 'test@example.com';
    const mockResponse = { message: 'User registered successfully' };
    mockFetch.mockResolvedValue({
      json: () => mockResponse,
    });

    const result = await RegisterUser(password, confirmPassword, email);

    expect(result).toEqual(mockResponse);
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:4000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        password: password,
        confirm_password: confirmPassword,
        email: email,
      }),
    });
  });
});

describe('ListUsers', () => {
  it('should fetch list of users', async () => {
    const mockResponse = [
      { id: 1, username: 'user1' },
      { id: 2, username: 'user2' },
    ];
    mockFetch.mockResolvedValue({
      json: () => mockResponse,
    });

    const result = await ListUsers();

    expect(result).toEqual(mockResponse);
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:4000/api/users', {
      method: 'GET',
    });
  });
});
