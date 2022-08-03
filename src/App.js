import './App.css';
import Login from './features/Auth/page/Login';
import PhotosList from './features/photos/pages/PhotosList';

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { setDataUser, setIsHasUser } from './app/userSlice';
import AddPhoto from './features/photos/pages/AddPhoto';
import { auth } from './firebase/config';
import PhotosPage from './features/photos';

function App() {
    const dispatch = useDispatch();
    const { isHasUser } = useSelector((state) => state.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const { displayName, email, photoURL, uid } = user;
                dispatch(setDataUser({ displayName, email, photoURL, uid }));
                dispatch(setIsHasUser(true));
            } else {
                dispatch(setIsHasUser(false));
            }
        });
        return unsubscribe;
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Navigate to='/photos' />}></Route> */}
                {/* <Route path="/photos/*" element={<PhotosPage />}></Route> */}
                <Route path="/" element={<PhotosList />}></Route>
                <Route
                    path="/AddPhoto"
                    element={isHasUser ? <AddPhoto /> : <Navigate to="/" />}
                ></Route>
                <Route
                    path="/EditPhoto/:id"
                    element={
                        isHasUser ? (
                            <AddPhoto />
                        ) : (
                            <Navigate
                                to={{
                                    pathname: '/',
                                    state: { showToast: true },
                                }}
                            />
                        )
                    }
                ></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
