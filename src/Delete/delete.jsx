import { useEffect, useState } from "react"
import Cancel from "../components/Cancel/Index"
import axios from "axios"

export default function Delete(){
    const [id, setId] = useState("")
    const [showNotFound, setShowNotFound] = useState(false);
    const [data, setData] = useState({})

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
                    <div>
                        <h1>{data.id}</h1>
                        <span>name: {data.name}</span>
                        <br></br>
                        <span>kind: {data.kind}</span>
                        <br></br>
                        <span>ano: {data.year}</span>
                    </div>
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