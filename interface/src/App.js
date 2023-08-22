import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddStudents from './components/AddStudents';
import EditStudents from './components/EditStudents';
import './App.css';
import Login from './page/Login';
import RegisterUser from './page/RegisterUser';
import Dashboard from './page/Dashboard';
import Error from './page/Error';
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Dashboard />} errorElement={<Error />}/>
          <Route path="/students/add" element={<AddStudents />} />
          <Route path="/students/edit/:id" element={<EditStudents />} />
          <Route path="/login" element={<Login />}  errorElement={<Error />}/>
          <Route path="/register" element={<RegisterUser />}  errorElement={<Error />}/>          
        </Routes>
      </div>
    </Router>
  );
}
export default App;