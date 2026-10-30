import { useEffect, useState } from "react"
import Cancel from "../components/Cancel/Index"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Delete(){
    const [id, setId] = useState("")
    const [showNotFound, setShowNotFound] = useState(false);
    const [data, setData] = useState({})

    const navigate = useNavigate();

    function search(){
        axios.get(`https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/movies/${id}`)
            .then(res => {
                setData(res.data);
                setShowNotFound(false);
            })
            .catch(err => {
                setData({});
                setShowNotFound(true);
            })
    }

    function deleteMovie(){
        axios.delete(`https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/movies/${id}`)
            .then(navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>delete</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    id: 
                    <input onChange={(e) => setId(e.target.value)}></input>
                </label>
                <br></br>
                <button onClick={() => search()}> search </button>
                <Cancel/>
            </form>

            {data.name 
                ? 
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>{data.id}</h1>
                        <span>name: {data.name}</span>
                        <br></br>
                        <span>kind: {data.kind}</span>
                        <br></br>
                        <span>ano: {data.year}</span>

                        <button onClick={() => deleteMovie()}> delete </button>
                        <Cancel/>
                    </form>
                :
                <div></div>
            }

            {showNotFound
                ?
                    <h1> not found</h1>
                :
                    <div></div>
            }

        </div> 
    )
}