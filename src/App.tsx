import { Routes, Route } from 'react-router-dom';
import { LayoutApplication, LayoutAccount } from '@abpjs/theme-basic';
import { LoginPage } from '@abpjs/account';
import { HomePage } from './pages/Home';

function App() {
  return (
    <Routes>
      {/* Main app pages with LayoutApplication */}
      <Route element={<LayoutApplication />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* Auth pages with LayoutAccount */}
      <Route element={<LayoutAccount />}>
        <Route path="/account/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
