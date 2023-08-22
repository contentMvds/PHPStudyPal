 import { setToken, getToken, checkTokenExists } from './tokenUtils';

// Mock para o localStorage
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('setToken', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should set token in localStorage', () => {
    const token = 'exampleToken';
    setToken(token);

    expect(localStorage.setItem).toHaveBeenCalledWith('token', token);
  });
});


describe('getToken', () => {
    afterEach(() => {
      localStorage.clear();
    });
  
    it('should return token from localStorage', async () => {
      const token = 'exampleToken';
      localStorage.setItem('token', token);
  
      const result = await getToken();
  
      expect(result).toEqual(token);
    });
  
    it('should return null if token is not in localStorage', async () => {
      const result = await getToken();
  
      expect(result).toBeNull();
    });
  });

  
describe('checkTokenExists', () => {
    afterEach(() => {
      localStorage.clear();
    });
  
    it('should return true if token exists in localStorage', () => {
      localStorage.setItem('token', 'exampleToken');
  
      const result = checkTokenExists();
  
      expect(result).toBe(true);
    });
  
    it('should return false if token does not exist in localStorage', () => {
      const result = checkTokenExists();
  
      expect(result).toBe(false);
    });
  });