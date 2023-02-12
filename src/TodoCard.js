// import './App.css';

// import React, {Component} from 'react';



// export default class TodoCard extends Component {
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


// export default App;
