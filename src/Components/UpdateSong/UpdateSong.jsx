
import React, { Component } from 'react';


class UpdateSong extends Component {
    constructor(props) {
        super(props);
        this.state = {  

            id:props.id,
            title: props.title,
            artist:props.artist,
            album: props.artist,
            genre: props.genre,
            release_date: props.release_date,
            likes:props.likes
        }
    }

    handleChange=(event)=>{
      this.setState({
            [event.target.name]:event.target.value,
        });

    }

   


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateSong(this.state)
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                
                <label>Title</label>
                <input name='title' onLoad={this.state.title} onChange={this.handleChange} value={this.state.title}/>
                <label>Artist</label>
                <input name="artist"onLoad={this.state.artist} onChange={this.handleChange} value={this.state.artist}/>
                <label>Album</label>
                <input name='album' onLoad={this.state.album} onChange={this.handleChange} value={this.state.album}/>
                <label>Genre</label>
                <input name="genre" onLoad={this.state.genre} onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label>
                <input name='release_date'onLoad={this.state.release_date} onChange={this.handleChange} value={this.state.release_date}/>
                <label>Likes</label>
                <input name='likes'onLoad={this.state.likes} onChange={this.handleChange} value={this.state.likes} readOnly/>
                
                <button type="submit">Create</button>


            </form>

          );
    }
}

export default UpdateSong; 