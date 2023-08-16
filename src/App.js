import './App.css';
import { Home } from './components/Pages/Home';
import { NoPage } from './components/Pages/NoPage';
import { Services } from './components/Pages/Services';

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;