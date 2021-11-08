import React, { Component } from 'react';

class FilterFields extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            artist:'',
            album:'',
            genre:'',
            release_date:''

         }
    }

    
    handleChange=(event)=>{
        this.setState({
              [event.target.name]:event.target.value,
          });
         
  
      }
  
    handleSubmit = (event) => {
          event.preventDefault();
        if (this.state.artist !== ""){
            this.props.filterSongsByValue(this.state.artist)
        }
        else if (this.state.album !== ""){
            this.props.filterSongsByValue(this.state.album)
        }
        else if (this.state.genre !== ""){
            this.props.filterSongsByValue(this.state.genre)
        }
        else if (this.state.release_date !== ""){
                this.props.filterSongsByValue(this.state.release_date)
        }

        this.setState({
            artist:'',
            album:'',
            genre:'',
            release_date:''
        })
          
      }
  
      

    render() { 
        return (  
           <div> 
            
            <form onSubmit={this.handleSubmit}>
                
                <label>Filter By Artist</label>
                <input name='artist' onChange={this.handleChange} value={this.state.artist}/>
                
            <button type="submit">Filter By Artist</button>

            </form>

            <form onSubmit={this.handleSubmit}>
                
                <label>Filter By Album</label>
                <input name='album' onChange={this.handleChange} value={this.state.album}/>
            
            <button type="submit">Filter By album</button>

            </form>

            <form onSubmit={this.handleSubmit}>
                    
                <label>Filter By Genre</label>
                <input name='genre' onChange={this.handleChange} value={this.state.genre}/>
              
            <button type="submit">Filter By Genre</button>

            </form>

            <form onSubmit={this.handleSubmit}>
                    
                <label>Filter By Release Date</label>
                <input name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
                
            
            <button type="submit">Filter By Release Date</button>


        </form>
</div>
        );
    }
}
 
export default FilterFields;


