import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Messenger from './components/Messenger/Messenger';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <main className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/' element={<Profile />} />
            <Route path='/messages/*' element={<Messenger />} />
            <Route path='/news/' element={<News />} />
            <Route path='/music/' element={<Music />} />
            <Route path='/settings/' element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;