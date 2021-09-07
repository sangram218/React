import { deleteRecord, updateAlbumArray } from "./FakeAlbumsService";
import { updateSongArray } from "./FakeSongsService";

const Artistss = [
    {
        id:1,
        name:"Travis Scott",
    },
    {
        id:2,
        name:"Eminem",
    },
    {
        id:3,
        name:"Wiz Khalifa",
    }
]

export default function getArtists(){
    return Artistss;
}


export function addArtists(artistName){

    let Id=0;
    Artistss.map((Artist)=>{
        if(Artist.id>Id)
            Id=Artist.id
    })

    Artistss.push({id:Id+1,name:artistName})
}

export function updateArtists(artistName,artistId){
    let oldArtistName;
    Artistss.map(Artist=>{
        if(Artist.id===Number(artistId))
        {
            // this artist is passed to fakeablumservice to update artist there
            oldArtistName=Artist.name 
            Artist.name=artistName
        }
                        
    })
    updateAlbumArray(oldArtistName,artistName)
    updateSongArray(oldArtistName,artistName)
}

export function deleteArtists(artist){

    deleteRecord(artist.name)

    // splice is for removing artist from Artistss
    Artistss.splice(Artistss.indexOf(artist),1)
    // filter returns new array hence modifiedArtistList gets new array which will be assigned to artists state
    // var.component re renders because new array get assigned to state var artists
    // if we return Artistss instead of applying filter then also correct output would be return but the
    // same array would be returned in that case
    return Artistss.filter((Artist)=>{
       return Artist.id!==artist.id
    })
}