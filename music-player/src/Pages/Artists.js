import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  getArtists  from '../Services/FakeArtistsService'
import { deleteArtists } from './../Services/FakeArtistsService';

export default function Artists() {

    const [artists, setArtists] = useState(getArtists())

    const onDelete = (artist)=>{
       let modifiedArtistList = deleteArtists(artist)
        setArtists(modifiedArtistList)
    }

    return (
        <div data-testid="id-2">
            <h1 id="h" className="pagetitle">Artists</h1>
            <Link to={'/addArtist'} className="btn btn-primary">Add Artist</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {artists.map(artist => {
                        return <tr key={artist.id}>
                            <td>{artist.id}</td>
                            <td>{artist.name}</td>
                            <td>
                                <Link to={`/updateArtist/${artist.id}/${artist.name}`} style={{margin:"5px"}} className="btn btn-success btn-sm">Update</Link>
                                <button onClick={()=>{onDelete(artist)}} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>

                    })}
                </tbody>
            </table>
        </div>
    )
}
