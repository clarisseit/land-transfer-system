import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SellerFormPage from './SellerFormPage';
import BuyerFormPage from './BuyerFormPage';
import Dashboard from './Dashboard';
import DashSeller from './DashSeller';
import DashSetting from './DashSetting';
import DashBuyer from './DashBuyer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller" element={<SellerFormPage />} />
        <Route path="/buyer" element={<BuyerFormPage />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path="dashseller" element={<DashSeller />} />
        <Route path="dashsetting" element={<DashSetting />} />
        <Route path="dashbuyer" element={<DashBuyer />} />
      </Routes>
    </Router>
  );
};

export default App;
