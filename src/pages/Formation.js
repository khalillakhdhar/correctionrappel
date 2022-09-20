import React from 'react';
class Formation extends React.Component
{
    constructor()
    {
        super();
        this.state={
            domaine:"Docteur en G.L",
            Mastere:"M.R sécurité",
            Certifications:" OCJD et autres"

        }
    }
    render()
    {
        return(
            <div>
<h2>{this.props.title}</h2>
<ol>
<li>{this.state.domaine}</li>
<li>{this.state.Mastere}</li>
<li>{this.state.Certifications}</li>

</ol>
            </div>
            
            )
    }

}
export default Formation;