import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    useResolvedPath,
    useMatch,
  } from "react-router-dom";
import PhotosList from './pages/PhotosList';
import { useLocation } from 'react-router-dom';

function PhotosPage(props) {

    return (
        <>
        <Routes>
            <Route path='/' element={<PhotosList />}></Route>
        </Routes>
        </>
    );
}

export default PhotosPage;