import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import Entry from './Entry.jsx'; 
import format from 'date-fns/format'
'use strict'; 

class App extends Component { 
    constructor(props){
        super(props); 
        this.state = {
            entries: [], 
            text: ''
        }
        this.handleTextareaSubmit = this.handleTextareaSubmit.bind(this); 
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    handleTextareaChange(e){ 
        this.setState({
            text: e.target.value
        });
    }

    handleTextareaSubmit(e){  
         
        let d = new Date()
        let key = this.state.text + "_" + format(d, "x")
        let datetime = format(d, "DD/MM/YYYY HH:mm:ss")
        const newEntries = [...this.state.entries, <Entry 
            text={this.state.text} datetime={datetime} key={key} />]
        this.setState({
            text:'', 
            entries: newEntries
        })
        e.preventDefault();
    }

    render(){
        const {text, entries} = this.state; 
        return(
            <div>
                {this.state.entries}
                <form onSubmit={this.handleTextareaSubmit}> 
                    <textarea id="form_textarea" name='form_textbody' 
                        value={this.state.text} onChange={this.handleTextareaChange}></textarea>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
        



        


}
ReactDOM.render(<App />, document.getElementById('root')) 