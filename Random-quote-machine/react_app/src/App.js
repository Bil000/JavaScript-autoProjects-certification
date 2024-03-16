import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter)


class AppWrapper extends React.Component { 
  constructor (props) {
   super(props)
   this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount = async function () {
      try {
         const quoteApiLink = "https://type.fit/api/quotes";
         const response = await fetch(quoteApiLink);
         const data = await response.json();
         const index = Math.floor(Math.random(0) * data.length);
         this.getDataFromApi(data, index);
      
      } catch (error) {
           alert ("Huh looks like there was an " + error);
           console.log("Oops! there was an " + error);
           return;
      }
  }
  preventSubmit (e) {e.preventDefault()}
  getDataFromApi (data, index) {
      const text = document.getElementById("text");
      const author = document.getElementById("author");
      const rg = /, type.fit/gi;
      text.textContent = data[index].text;
      author.textContent = `- ${
         data[index].author === "type.fit" ? 
            "Dale Carnegie" 
            :
            data[index].author.replace(rg, "")}`;
  }
  render () {
   return (  
     <main>
      <form id="quote-box" onSubmit={this.preventSubmit}>
         <p id="text"></p>
         <div id="authorDiv">
            <span id="author"></span>
         </div>
         <div id="quoteDiv">
            <a id="tweet-quote" href="#"><FontAwesomeIcon icon="fa-brands fa-twitter"/></a>
            <button id="new-quote" onClick = {this.componentDidMount}>New Quote</button>
         </div>
      </form>
   </main>
   )
  }
}

export default AppWrapper;
