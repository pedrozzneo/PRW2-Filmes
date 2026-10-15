import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home(){
    const [data, setData] = useState([])

    function getData(){
        axios.get("https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/filmes")
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData()   
    }, [])
    
    useEffect(() => {
        console.log(data)
        data.length > 0 ? console.log(data[0].nome) : console.log("nothing")
    }, [data])

    return(
        <>
            <h1> home </h1>

            {data.map(user => {
                return (
                    <div>
                        {user.nome}
                    </div>
                )
            })}
        </>
    )
}