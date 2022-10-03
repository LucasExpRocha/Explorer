import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'
import { New } from '../Pages/New'
import { Details } from '../Pages/Details';

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/details/1' element={<Details/>}/>
        </Routes>
    )
}