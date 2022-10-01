import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/details';
import { Home } from '../pages/home';
import { New } from '../pages/new';
import { Profile } from '../pages/profile';

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    )
}