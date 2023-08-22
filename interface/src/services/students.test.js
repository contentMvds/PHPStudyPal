import {
    ListStudents,
    ListByIdStudent,
    EditStudents,
    DeleteStudents,
    CreateStudents,
  } from './students'; 
  
  // Mock para a função fetch
  const mockFetch = jest.fn();
  
  beforeAll(() => {
    global.fetch = mockFetch;
  });
  
  afterAll(() => {
    global.fetch.mockRestore();
  });
  
  describe('ListStudents', () => {
    it('should fetch list of students', async () => {
      const mockResponse = [{ id: 1, nome: 'John' }, { id: 2, nome: 'Jane' }];
      mockFetch.mockResolvedValue({
        json: () => mockResponse,
      });
  
      const result = await ListStudents();
  
      expect(result).toEqual(mockResponse);
      expect(mockFetch).toHaveBeenCalledWith('http://localhost:4000/students', {
        method: 'GET',
      });
    });
  });
  
  describe('ListByIdStudent', () => {
    it('should fetch student by ID', async () => {
      const id = 1;
      const mockResponse = { id: 1, nome: 'John' };
      mockFetch.mockResolvedValue({
        json: () => mockResponse,
      });
  
      const result = await ListByIdStudent(id);
  
      expect(result).toEqual(mockResponse);
      expect(mockFetch).toHaveBeenCalledWith(`http://localhost:4000/students/${id}`, {
        method: 'GET',
      });
    });
  });
  
  describe('EditStudents', () => {
    it('should update student information', async () => {
      const id = 1;
      const nome = 'Updated Name';
      const email = 'updated@example.com';
      const endereco = 'Updated Address';
      const telefone = '1234567890';
      const imagem = 'updated-image.jpg';
      const mockResponse = { id: 1, nome, email, endereco, telefone, foto: imagem };
      mockFetch.mockResolvedValue({
        json: () => mockResponse,
      });
  
      const result = await EditStudents(id, nome, email, endereco, telefone, imagem);
  
      expect(result).toEqual(mockResponse);
      expect(mockFetch).toHaveBeenCalledWith(`http://localhost:4000/students/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          nome,
          email,
          endereco,
          telefone,
          foto: imagem,
        }),
      });
    });
  });
  
  describe('DeleteStudents', () => {
    it('should delete a student', async () => {
      const id = 1;
      const mockResponse = { message: 'Student deleted successfully' };
      mockFetch.mockResolvedValue({
        json: () => mockResponse,
      });
  
      const result = await DeleteStudents(id);
  
      expect(result).toEqual(mockResponse);
      expect(mockFetch).toHaveBeenCalledWith(`http://localhost:4000/students/${id}`, {
        method: 'DELETE',
      });
    });
  });
  
  describe('CreateStudents', () => {
    it('should create a new student', async () => {
      const nome = 'New Student';
      const email = 'new@example.com';
      const telefone = '1234567890';
      const endereco = 'New Address';
      const imagem = 'new-image.jpg';
      const mockResponse = { id: 3, nome, email, endereco, telefone, foto: imagem };
      mockFetch.mockResolvedValue({
        json: () => mockResponse,
      });
  
      const result = await CreateStudents(nome, email, telefone, endereco, imagem);
  
      expect(result).toEqual(mockResponse);
      expect(mockFetch).toHaveBeenCalledWith('http://localhost:4000/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          telefone,
          endereco,
          foto: imagem,
        }),
      });
    });
  });
  