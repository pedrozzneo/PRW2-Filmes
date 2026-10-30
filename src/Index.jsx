import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Banner from './Banner/Banner';
import Add from './Add';
import Read from './Read';

export default function Index(){
    return(
        <BrowserRouter>
            <Banner/> 
            <Routes>
                <Route path='/' element = {<Home/>}></Route>
                <Route path='*' element = {<Error/>}></Route>
                <Route path='/add' element = {<Add/>}></Route>
                <Route path='/read/:id' element = {<Read/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}