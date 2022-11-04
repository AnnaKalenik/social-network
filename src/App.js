import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <main className="app-wrapper-content">
        <Dialogs />
        {/* <Profile /> */}
      </main>
    </div>
  );
}

export default App;
