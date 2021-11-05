import React from 'react';

const CompleteSongsList = (props) => {
    return (
        <div>
            <h1> Complete Songs List</h1>
            <h2>{props.songsObject[0]}</h2>
                   { console.log(props.songsObject[0])}
        </div>

      )
}
 
export default CompleteSongsList;