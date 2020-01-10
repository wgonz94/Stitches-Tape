import React, { Component } from 'react'

class NewMeasurement extends Component {
  render() {
    return (
     <div className="container">
 
        <h3 className="center-align">Client Info</h3>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input type="text" placeholder="John Smith" id="client-name" />
            <label htmlFor="client-name" className="active">Client Name (Required)</label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">assignment</i>
            <input type="text" placeholder="Project Name" id="project-name" />
            <label htmlFor="project-name" className="active">Project Name (Required)</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input id="email" type="email" placeholder="youremail@mail.com" className="validate" />
            <label htmlFor="email" className='active'>Email</label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
            <input id="phone" placeholder="(555) 555-5555" type="tel" className="validate" />
            <label htmlFor="phone" className='active'>Telephone</label>
          </div>
        </div>
      </div>

    )
  }
}

export default NewMeasurement
