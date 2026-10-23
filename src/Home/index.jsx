import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(){
    const [data, setData] = useState([])

    function getData(){
        axios.get("https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/filmes")
            .then(response => {
                setData(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()  
    }, [])

    return(
        <>
            <h1> home </h1>

            {data.map(movies => {
                return (
                    <div key={movies.id}>
                        <span> id: {movies.id}</span>
                        <span>  {movies.nome}  </span>
                    </div>
                )
            })}
        </>
    )
}