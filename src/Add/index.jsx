import axios from 'axios';
import {useState} from 'react';

export default function Add(){
    const [values, setValues] = useState({});
    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState(0);
    
    function add(){
        axios.post("https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/filmes", values)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setValues({nome, genero, ano})
                console.log(values)
                add(values)
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