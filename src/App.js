import './App.css';
import Header from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/register';
import GetStudInformation from './pages/getStudentInfo';
import UpdateStudInfo from './pages/update';
import LandingPage from './pages/landingpage';
import Technology from './pages/technologies';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/studentlist' element={<GetStudInformation />} />
          <Route path='/update/:id' element={<UpdateStudInfo />} />
          <Route path='/tech' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
