import React from 'react';
import FilterFields from '../FilterSongs/FilterSongs';


const CompleteSongsList = (props) => {
    

    return (
        <div className="table-responsive text-nowrap">
            <h1> Complete Songs List <button className="btn btn-link button1 ml-1" data-toggle="button" aria-pressed="false" onClick={()=>this.loadSongs()}>Reset List</button></h1>
            <table  className='table '>
            
        <thead>
            <tr >
            <th scope="col ">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Release Date</th>
            <th scope="col">Genre</th>
            <th scope="col">Amount of Likes</th>
            <th scope="col"></th>
             <th scope="col"></th>

            </tr>
        </thead>
        <tbody>
            <tr className="table-info table-bordered border-dark w-auto h-auto ">
            
            <td  ><h6>{props.songs.map(song =><div className="align-bottom">{song.title}</div> )}</h6></td>
            <td ><h6>{props.songs.map(song =><div>{song.artist}</div> )}</h6></td>
            <td  ><h6>{props.songs.map(song =><div>{song.album}</div> )}</h6></td>
            <td  ><h6>{props.songs.map(song =><div>{song.release_date}</div> )}</h6></td>
            <td ><h6>{props.songs.map(song =><div>{song.genre}</div> )}</h6></td>
            <td  ><h6>{props.songs.map(song =><div>{song.likes}</div> )}</h6></td>
            <td className="align-top" > <h6>{props.songs.map(song =><div className="td">{<button className='btn btn-link' onClick={()=>props.deleteSong(song.id)}
            >Delete</button>}</div>)}</h6></td>
            <td > <h6>{props.songs.map(song =><div>{<button className='btn btn-link' onClick={()=>props.updateSongChoice(song)}>Update</button>}</div>)}</h6></td>




                      
            
            </tr>
            
            
        </tbody>
    </table>
    
        </div>
        
      )
      
}
 
export default CompleteSongsList;