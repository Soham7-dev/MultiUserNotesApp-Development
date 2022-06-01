// import FetchMessage from './FetchMessage';
import UserLogin from './User/UserLogin';
import UserSignUp from './User/UserSignUp';
import NotesList from './Notes/NotesList';
import NotePage from './Notes/NotePage';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';

function App() {
  return (
    <div>
      <CookiesProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<UserLogin/>}/>
            <Route path = '/notes/' element={<NotesList/>}/>
            <Route path = '/notes/:id/' element={<NotePage/>}/>
            <Route path = '/register/' element={<UserSignUp/>}/>
          </Routes>
        </Router>
      </CookiesProvider>
    </div>
  );
}

export default App;