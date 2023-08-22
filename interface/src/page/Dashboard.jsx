import React from "react";
import ListStudents from "../components/ListStutends";
import ListUsers from "../components/ListUsers";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="column">
        <h2 className="title is-2">Lista de Alunos</h2>
      </div>
      <div className="columns is-centered ml-1">
        <div className="column is-12-tablet is-12-desktop is-12-widescreen">
          <ListStudents />
        </div>
      </div>
      <div className="column">
        <h2 className="title is-2">Lista de Usuario com acesso ao sistem</h2>
      </div>
      <div className="columns is-centered ml-1">
        <div className="column  is-12-tablet is-12-desktop is-12-widescreen">
          <ListUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
