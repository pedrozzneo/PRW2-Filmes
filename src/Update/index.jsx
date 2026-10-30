import { useState } from "react"
import Cancel from "../components/Cancel/Index"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Update(){
    const [id, setId] = useState("")
    const [showNotFound, setShowNotFound] = useState(false);
    const [data, setData] = useState({})
    const [name, setName] = useState("");
    const [kind, setKind] = useState("");
    const [year, setYear] = useState(0);

    const navigate = useNavigate();

    function search(){
        axios.get(`https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/movies/${id}`)
            .then(res => {
                setData(res.data);
                setName(res.data.name);
                setKind(res.data.kind);
                setYear(res.data.year);
                setShowNotFound(false);
            })
            .catch(err => {
                setData({});
                setShowNotFound(true);
            })
    }

    function updateMovie(){
        axios.put(`https://6ad156d7addc5b5cb142f654.mockapi.io/api/v1/carlaoclass/movies/${data.id}`, {name: name, kind: kind, year: year})
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>update</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    id:
                    <input onChange={(e) => setId(e.target.value)}></input>
                </label>
                <br></br>
                <button onClick={() => search()}> search </button>
                <Cancel/>
            </form>

            {data.id
                ?
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>{data.id}</h1>
                        <label>
                            name: <input value={name} onChange={(e) => {
                                setName(e.target.value)
                            }}></input>
                        </label>
                        <br></br>
                        <label>
                            kind: <input value={kind} onChange={(e) => {
                                setKind(e.target.value)
                            }}></input>
                        </label>
                        <br></br>
                        <label>
                            ano: <input value={year} onChange={(e) => {
                                setYear(Number(e.target.value))
                            }}></input>
                        </label>

                        <button onClick={() => updateMovie()}> update </button>
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
