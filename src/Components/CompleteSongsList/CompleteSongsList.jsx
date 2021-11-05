import React from 'react';

const CompleteSongsList = (props) => {
    return (
        <div>
            <h1> Complete Songs List</h1>
            <table  className='table table-bordered '>
            
        <thead>
            <tr>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Release Date</th>
            <th scope="col">Genre</th>
            <th scope="col">Amount of Likes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               
            <th scope="row"><h4>{props.songs.map(song =><div>{song.title}</div> )}</h4></th>
            <th scope="row"><h4>{props.songs.map(song =><div>{song.artist}</div> )}</h4></th>
            <th scope="row"><h4>{props.songs.map(song =><div>{song.album}</div> )}</h4></th>
            <th scope="row"><h4>{props.songs.map(song =><div>{song.release_date}</div> )}</h4></th>
            <th scope="row"><h4>{props.songs.map(song =><div>{song.genre}</div> )}</h4></th>
            <th scope="row"><h4>{props.songs.map(song =><div>{song.likes}</div> )}</h4></th>
            </tr>
            
        </tbody>
    </table>
    
        </div>
        
      )
      
}
 
export default CompleteSongsList;