import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{ App} from './App';
import {createServer} from 'miragejs'
createServer({
  routes(){
    this.namespace='api'
    this.get('/transitions',()=>{
      return[
        {
          id:1,
          title:"AMor",
          amount:400,
          type:'deposito',
          categoria:'comida',
          creatdat:new Date()
        }
      ]
    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);


