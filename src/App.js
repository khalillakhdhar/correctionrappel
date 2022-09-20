import React from "react";
import About from "./pages/About";
import Formation from "./pages/Formation";
import Multiplication from "./pages/multiple";
class App extends React.Component{
    render(){
        return(
<div>
    <h2>{this.props.name}</h2>
    <br></br>
    <About title="A propos de moi"></About>
    <Formation title="Mon parcours"></Formation>
    <Multiplication></Multiplication>
</div>


        ); }
}
export default App;
