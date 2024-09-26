//EJERCICIO 1

// import React from "react";
// import Counter from "./Counter";
// function App() {
//   return (
//    <div>
//     <Counter/>
//    </div>
//   );
// }

// export default App;

//EJERCICIO 2

import React from "react";
import Component from "./Component";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {mostrarComponente: true};
    }
    toggleComponent =() => {
      this.setState((prevState => ({mostrarComponente: !prevState.mostrarComponente})))
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>
        {this.state.mostrarComponente 
        ? "ocultar mensaje"
        : "mostrar mensaje"}
        </button>
        {this.state.mostrarComponente && <Component />}
      </div>
    );
  }
}
export default App;