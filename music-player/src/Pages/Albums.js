import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getAlbums from '../Services/FakeAlbumsService'
import { deleteAlbums } from '../Services/FakeAlbumsService'

export default function Albums() {

    const [albums, setAlbums] = useState(getAlbums())

    const onDelete = (album)=>{
        let modifiedAlbumList = deleteAlbums(album)
         setAlbums(modifiedAlbumList)
     }

    return (
        <div>
            <h1 className="pagetitle">Albums</h1>
            <Link to={'/addAlbum'} className="btn btn-primary">Add Album</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((album) => {
                        return <tr>
                            <td>{album.id}</td>
                            <td>{album.albumName}</td>
                            <td>{album.artistName}</td>
                            <td>{album.duration}</td>
                            <td>
                                <Link to={`/updateAlbum/${album.id}/${album.albumName}/${album.artistName}`} style={{ margin: "5px" }} className="btn btn-success btn-sm">Update</Link>
                                <button onClick={() => { onDelete(album) }} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
