import React, { Component } from 'react';


class SingleSongDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songIdChoice: 1

         }
    }
    chooseSongId=(props)=>{
       props.songs.map((element) => element.id)
    }

    render() { 
        return (
            
        <div>
        <h2>Your Song Choice</h2>
        {this.chooseSongId}

    </div>
          );
    }
}
 
export default SingleSongDisplay;
