import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Cancel from '../components/Cancel/Index';

export default function Add(){
    const [values, setValues] = useState();
    const [name, setName] = useState("");
    const [kind, setKind] = useState("");
    const [year, setYear] = useState(0);
    
    const navigate = useNavigate();

    function add(){
        axios.post("https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/movies", values)
            .then(response => {
                console.log(response);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        values? add(values) : console.log("no values yet to post a new movie")
    }, [values])
    
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <label> 
                    name: <input onChange={(e) => {
                        setName(e.target.value)
                    }}></input>
                </label>
                <br></br>
                <label> 
                    kind: <input onChange={(e) => {
                        setKind(e.target.value)
                    }}></input>
                </label>
                <br></br>
                <label> 
                    year: <input onChange={(e) => {
                        setYear(Number(e.target.value))
                    }}></input>
                </label>
                <br></br>
                <button onClick={() => setValues({name: name, kind: kind, year: year})}> create </button>
                <Cancel/>
            </form>
        </div>
    )
}