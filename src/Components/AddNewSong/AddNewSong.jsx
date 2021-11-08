
import React, { Component } from 'react';


class AddNewSong extends Component {
    constructor(props) {
        super(props);
        this.state = {  

            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            likes:0
        }
    }

    handleChange=(event)=>{
      this.setState({
            [event.target.name]:event.target.value,
        });

    }

   


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSong(this.state)
        this.setState({
            likes:this.state.likes
        })
    }

    render() { 
        return (
            <form clasName='form-group'onSubmit={this.handleSubmit}>
                
                <label>Title</label><br/>
                <input name='title' onChange={this.handleChange} value={this.state.title}/><br/>
                <label>Artist</label><br/>
                <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
                <label>Album</label><br/>
                <input name='album' onChange={this.handleChange} value={this.state.album}/>
                <label>Genre</label><br/>
                <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
                <label>Release Date</label><br/>
                <input name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
                <label>Likes</label><br/>
                <input name='likes' onLoad={this.handleChange} value={this.state.likes} readOnly/><br/>
                
                <button className="btn btn-primary my-2 btn-sm" type="submit">Create</button>


            </form>

          );
    }
}

export default AddNewSong; 