import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

const RoutingApp = () => {
    return ( 
        <>
         <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn />} />
            

        </Routes>
    </BrowserRouter>
        </>
     );
}
 
export default RoutingApp;