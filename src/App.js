import './App.css';
// import TodoCard from './TodoCard'
import React, {Component} from 'react';
import FirstComponent from './FirstComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: []
    };
  }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputUpdate = (event) => {
    this.setState({input: event.target.value})
  }

  formSubmit = (event) => {
    event.preventDefault()
    //preventDefault is built in method that prevents state from being deleted when a page is refreshed
   console.log("**** this is state" + this.state.items)
    this.setState( {
      items : [...this.state.items, this.state.input],
      // ^^ we take whatever is in the array already with...this.state.items, and add to end of it, whatever is in this.state.input or the input value
      input: ''
      // after adding new item, we change input back to an empty string
      }
      
    )
    // console.log(this.state.items)
    
  }

  render() {
    // console.log("****this is state***", this.state.isOn)
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <input value={this.state.input} onChange={this.inputUpdate}/>
          {/* we want to assign the value this.state.input, so that the input bar on screen will go back to being empty once submit button is clicked */}
       <button >Submit</button>
        {/* <button onClick={this.toggle}>{this.state.isOn ? 'On' : 'Off'}</button> */}
        {/* the curly braces above indicate to computer that what we are writing is javascript - not necessarily an object */}
      
        </form>
       
        <FirstComponent items={this.state.items}/>
       
        {/* we are passing an argument in the text after FirstComponent. we can call the arg anything we want, and then define it in {} */}
      </div>
    )
  }

}


// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       isClicked: false,
//       text: "",
//       listOfTodos: []
//     }
//   }
//   handleClick = () => {
//     this.setState({
//       todos: [...this.state.listOfTodos, this.state.text],
//       text: ""
//     })
//     // this.state.isClicked ?
//     //   this.setState({isClicked: false}) :
//     //     this.setState({isClicked: true})
//   };

//   // handleSubmit = (event) => {
//   //   event.preventDefault()
//   //   this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
//   //   this.setState({inputValue: ""})
//   // }
//   render (){
//     return (
//     <div className="App">
//       <header className="App-header">
       
     
//         <input onChange={(event)=> this.setState({
//           text: event.target.value})}
//           value= {this.state.text}
//         ></input>
//       <button onClick={this.handleClick}> Add Todo</button>
      

      
//      {this.state.listOfTodos.map((todo, index)=>{
//       return <h2>{todo}</h2>
//          }
//        )
//      }
     
     
//          <h1> {this.props.name}</h1>
      
//       </header>
//     </div>
//   )};
// }


export default App;

{/* <FirstComponent /> */}
