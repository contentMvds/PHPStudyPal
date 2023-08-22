import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '.';

describe('Dashboard', () => {
  it('should render a list of students and a list of users', () => {
    render(<Dashboard />);

    // Assert that both headings exist
    const studentHeading = screen.getByText('Lista de Alunos');
    const userHeading = screen.getByText('Lista de Usuario com acesso ao sistem');
    expect(studentHeading).toBeInTheDocument();
    expect(userHeading).toBeInTheDocument();

    // Assert that ListStudents and ListUsers components are rendered
    const listStudentsComponent = screen.getByTestId('list-students');
    const listUsersComponent = screen.getByTestId('list-users');
    expect(listStudentsComponent).toBeInTheDocument();
    expect(listUsersComponent).toBeInTheDocument();
  });
});
