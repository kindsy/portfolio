import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ThoughtsPage } from './pages/ThoughtsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={
                    <HomePage />
                } />
                <Route path="/thoughts" element={
                    <ThoughtsPage />
                 } />
                <Route path="*" element={
                    <NotFoundPage />
                 } />
            </Routes>
        </Router>
    )
}