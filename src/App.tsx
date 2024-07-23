import Toolbar from './components/Toolbar';
import {Route, Routes} from 'react-router-dom';
import ContactListPage from './containers/ContactListPage';
import ContactFormPage from './containers/ContactFormPage';
import './App.css';

const App = () => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className='p-3'>
        <Routes>
          <Route path="/" element={<ContactListPage/>}/>
          <Route path="/:new" element={<ContactFormPage/>}/>
          <Route path="*" element={<h1>Not found!</h1>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;