import { Route, Routes } from 'react-router-dom';
import Testmenu from './pages/Testmenu';
import Testadd from './pages/Testadd';
import Testlist from './pages/Testlist';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Testmenu/>}/>
      <Route path="testadd" element={<Testadd/>}/>
      <Route path="testlist" element={<Testlist/>}/>
    </Routes>
  );
}

export default App;
