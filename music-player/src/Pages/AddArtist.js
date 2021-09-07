import React ,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import getArtists, { addArtists } from './../Services/FakeArtistsService';


export default function AddArtist() {

 
    const [isValueSet, setValue] = useState(true)
    const [counter, setCounter] = useState(false)
    const [name, setName] = useState("")
    const history = useHistory()

    // const
    const onclicked = ()=>{
        setCounter(false)
        if(name.length==0) 
            setValue(false)
        else{
            addArtists(name)
            setValue(true)
            setCounter(true)
            setTimeout(()=>{
                history.push("/artists")
            },2000)
        }
    }

    return (
        <div>
            <h1 className="pagetitle">Add Artist</h1>
            <div class="mb-3">
                <label for="name" class="form-label">Artist Name</label>
                <input onChange={(event)=>{setName(event.target.value)}} type="text" class="form-control" id="name"/>
            </div>
            <button onClick={onclicked} className="btn btn-primary" style={{"margin-right":"10px"}}>Add</button>
            <Link to={'/artists'} className="btn btn-danger">Cancel</Link>
            {!isValueSet && <div class="myAlert-bottom alert alert-danger" role="alert">Artist Name is required</div>}
            {isValueSet && counter && <div class="myAlert-bottom alert alert-success" role="alert">Artist added successfully</div>}
        </div>
    )
}
