import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ButtonComp from './ButtonComp';
import React from 'react';
import ReactDOM from 'react-dom';


export default class Firedoor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newItem: "",
        list: []
      };
    }
  
  
    addItem() {
        console.log("newItem.value");
      const newItem = {
        id: 1 + Math.random(),
        // value: 1 + Math.random()
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
    }
    render() {
      return (
        <div>
            <button onClick={() => this.addItem()} > 
              <i class="material-icons"> + </i>
            </button>
            <br /> <br />
            <ul>
              {this.state.list.map(item => {
                return (
                    <div key={item.id} style={{display:'-webkit-inline-flex', fontStyle: 'oblique',fontSize: '20px', alignItems: 'center'}}>
                        Firedoor: <ButtonComp/>
                    </div>
                );
              })}
            </ul>
          </div>
      );
    }
  }
  
  ReactDOM.render(<Firedoor />, document.getElementById('root'));

//   disabled={!this.state.newItem.length}
