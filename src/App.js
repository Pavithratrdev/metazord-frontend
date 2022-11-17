import './App.css';
import Home from './pages/home'
import Header from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/register';
import GetStudInformation from './pages/getStudentInfo';
import UpdateStudInfo from './pages/update';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/studentlist' element={<GetStudInformation />} />
          <Route path='/update/:id' element={<UpdateStudInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
