import React from "react";
class Multiplication extends React.Component
// le nom peu être # du nom de la page js (mauvaise pratique)
{
    constructor()
    {
        super();
        this.state={
            x:6
        }
        this.Multiplier=this.Multiplier.bind(this);
    }
    Multiplier()
    {
        let y=this.state.x*10;
        this.setState({x:y})
    }
    render()
    {
return(
        <div>
<h2>Multiplication</h2>
random number: {this.state.x}&nbsp;&nbsp;&nbsp;
<button onClick={this.Multiplier}>* 10</button>

        </div>)

    }

}
export default Multiplication
