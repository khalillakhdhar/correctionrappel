import React from 'react';
class About extends React.Component
{
    constructor()
    {
        super();
        this.state={
            nom:"Lakhdhar",
            prenom:"Khalil",
            adresse:"Gabés",
            email:"khalillakhdhar@gmail.com",
            couleur:"bleu"
        }
    }
    render(){
        return(
<>
<h2>{this.props.title}</h2>
<p>
    <ul>
        <li>Nom:{this.state.nom} {this.state.prenom}</li>
        <li>Adresse: {this.state.adresse} </li>
        <li>Email: {this.state.email} </li>
        <li>couleur préféré: {this.state.couleur} </li>


    </ul>
</p>

</>


        )
    
    }

}
export default About;