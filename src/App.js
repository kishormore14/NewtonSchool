
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import MainDirectors from './component/About_US/Directors/MainDirectors';
import Enquiry from './component/Enquiry/Enquiry';
import Contact from './component/Contact_US/Contact';
import HeavyFabrication from './component/Products/Heavy fabrication/HeavyFabrication';
import InvestmentCasting from './component/Products/InvestmentCasting/InvestmentCasting';
import SGICasting from './component/Products/SGi Casting/SGICasting';
import Macchine from './component/Products/MachineParts/Macchine';
import Rubber from './component/Products/Rubber/Rubber';
import Forging from './component/Products/Forging parts/Forging';
// InvestmentCasting
import Infrastructure from './component/Infrastructure/Stamping/StampingI';
import LoginPage from './component/Login_Registration/LoginPage';
import RegistrationPage from './component/Login_Registration/RegistrationPage';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path="/" element={<Home />} />
          <Route path="/maindirectors" element={<MainDirectors />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/heavyfabrication" element={<HeavyFabrication />} />
          <Route path="/investmentcasting" element={<InvestmentCasting />} />
          <Route path="/sgicasting" element={<SGICasting />} />
          <Route path="/machinedparts" element={<Macchine />} />
          <Route path="/rubber" element={<Rubber />} />
          <Route path="/forging" element={<Forging />} />
          <Route path="/stampinginfrastructure" element={<Infrastructure />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path='/Registration' element={<RegistrationPage/>}/>



        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
