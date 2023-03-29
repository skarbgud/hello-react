import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/*<Route path="/" element={<Home />} />*/}
                    <Route path="/about" element={<About />} />
                    <Route path="/profiles/:username" element={<Profile />} />
                </Route>
                {/*<Route path="/articles" element={<Articles/>} />*/}
                {/*<Route path="/articles/:id" element={<Article/>} />*/}
                <Route path="/articles" element={<Articles/>}>
                    <Route path=":id" element={<Article />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/mypages" element={<MyPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    );
};

export default App;