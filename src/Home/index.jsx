import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    const [data, setData] = useState([])

    function getData(){
        axios.get("https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/movies")
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
                    <Link key={movies.id} to={`/read/${movies.id}`}>
                        <span> id: {movies.id}</span>
                        <span>  {movies.name}  </span>
                    </Link>
                )
            })}
        </>
    )
}