import React from 'react';
import HomePage from './HomePage';
import EditPage from './EditPage';
import NewPost from './NewPost';
import SignUp from './SignUp';
import LogIn from './LogIn';
import ProfilePage from './ProfilePage';
import PostPage from './PostPage';
import '../style/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const RouterPage = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/editpage" element={<EditPage />} />
                    <Route path="/newpost" element={<NewPost />} />
                    <Route path="/profilepage" element={<ProfilePage />} />
                    <Route path="/postpage" element={<PostPage />} />
                </Routes>
            </div>
        </Router>
    )
}
export default RouterPage;