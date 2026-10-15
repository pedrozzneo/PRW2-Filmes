import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Error from './Error';

export default function Index(){
    return(
        <BrowserRouter>  
            <Routes>
                <Route path='/' element = {<Home/>}></Route>
                <Route path='*' element = {<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}