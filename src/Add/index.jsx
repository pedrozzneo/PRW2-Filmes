import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Add(){
    const [values, setValues] = useState();
    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState(0);
    
    const navigate = useNavigate();

    function add(){
        axios.post("https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/filmes", values)
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
                setValues({nome, genero, ano})
            }}>
                <label> 
                    nome: <input onChange={(e) => {
                        setNome(e.target.value)
                    }}></input>
                </label>
                <br></br>
                <label> 
                    genero: <input onChange={(e) => {
                        setGenero(e.target.value)
                    }}></input>
                </label>
                <br></br>
                <label> 
                    ano: <input onChange={(e) => {
                        setAno(Number(e.target.value))
                    }}></input>
                </label>
                <br></br>
                <button> enviar </button>
            </form>
        </div>
    )
}