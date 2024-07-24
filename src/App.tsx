import Toolbar from './components/Toolbar';
import {Route, Routes} from 'react-router-dom';
import ContactFormPage from './containers/ContactFormPage';
import ContactListPage from './containers/ContactListPage';

const App = () => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className='p-4'>
        <Routes>
          <Route path="/" element={<ContactListPage/>}/>
          <Route path="/new" element={<ContactFormPage/>}/>
          <Route path="*" element={<h1>Not found!</h1>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;