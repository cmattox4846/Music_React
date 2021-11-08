import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            title:''
         }
    }

    
    handleChange=(event)=>{
        this.setState({
              [event.target.name]:event.target.value,
          });
         
  
      }
  
    handleSubmit = (event) => {
          event.preventDefault();
          this.props.filterSongsByValue(this.state.title)
      }
  
      

    render() { 
        return (  
            <form onSubmit={this.handleSubmit}>
                
            <label>Search Titles</label>
            <input name='title' onChange={this.handleChange} value={this.state.title}/>
            
            
            <button type="submit"className="btn btn-primary button1">Search Songs</button>


        </form>

        );
    }
}
 
export default SearchBar;

