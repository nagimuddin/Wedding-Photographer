import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import Register from './Pages/Register/Register';
import AboutMe from './Pages/AboutMe/AboutMe';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import CheckOut from './Pages/Shared/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
