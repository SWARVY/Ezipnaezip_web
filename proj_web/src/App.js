import { RecoilRoot } from 'recoil';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import Navigator from './Components/Navigator.jsx';
import DiscoverPage from './Pages/DiscoverPage';
import PostPage from './Pages/PostPage';

function App() {
  let isLogin = false;

  return (
    <RecoilRoot>
      <Navigator islogin={isLogin} />
      <section className="content sm:container sm:mx-auto mt-6 mb-6 px-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/post" element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </RecoilRoot>
  );
}

export default App;
