import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { updateArtists } from '../Services/FakeArtistsService';

export default function UpdateArtist(props) {

    let name1 = props.match.params.name;
    // dont use props.match.params.name directly inside useState() as it cant be modify
    const [isValueSet, setValue] = useState(true)
    const [counter, setCounter] = useState(false)
    const [name, setName] = useState(name1)
    const history = useHistory()

    const onclicked = ()=>{
        setCounter(false)
        if(name.length==0) 
            setValue(false)
        else{
            updateArtists(name,props.match.params.id)
            setValue(true)
            setCounter(true)
            setTimeout(()=>{
                history.push("/artists")
            },2000)
        }
    }

    return (
        <div>
            <h1 className="pagetitle">Update Artist</h1>
            <div class="mb-3">
                <label for="name" class="form-label">Artist Name</label>
                <input type="text" class="form-control" value={name} onChange={(event) => {setName(event.target.value)}} />
            </div>
            <button onClick={onclicked} className="btn btn-primary" style={{ "margin-right": "10px" }}>Update</button>
            <Link to={'/artists'} className="btn btn-danger">Cancel</Link>
            {!isValueSet && <div class="myAlert-bottom alert alert-danger" role="alert">Artist Name is required</div>}
            {isValueSet && counter && <div class="myAlert-bottom alert alert-success" role="alert">Artist updated successfully</div>}
        </div>
    )
}
