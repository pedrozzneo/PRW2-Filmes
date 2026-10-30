import { Link } from "react-router-dom";

export default function Banner(){
    return(
        <header>
            <h1> Movies Catalog </h1>
            <Link to="/">home</Link>
            <br></br>
            <Link to="/add">add</Link>
            <br></br>
            <Link to="/update">update</Link>
            <br></br>
            <Link to="/delete">delete</Link>
        </header>
    )
}