import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Blogs from '../pages/blogs';
import Article from '../pages/article';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}>
                {' '}
            </Route>
            <Route path="/blog" element={<Blogs />}>
                {' '}
            </Route>
            <Route path="/article" element={<Article />}>
                {' '}
            </Route>
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default Router;
