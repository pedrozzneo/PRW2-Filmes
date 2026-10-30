import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Read(){
    const {id} = useParams();
    const [data, setData] = useState({})
    
    useEffect(() => {
        axios.get(`https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/filmes/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err))
    },[])

    useEffect(() => console.log(data), [data])

    return(
        <div>
            <h1>{id}</h1>
            <span>name: {data.nome}</span>
            <br></br>
            <span>kind: {data.genero}</span>
            <br></br>
            <span>ano: {data.ano}</span>
        </div>
    )
}