import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './page/home';
import Sistema from './page/sistema';

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/sistema" element={<Sistema />} />
            </Routes>
        </BrowserRouter>
    )
}