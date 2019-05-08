import React, { Component } from 'react';
export default class BadgeForm extends Component {
  //   state = {};

  // Aahora lo va a utilizar el BadgeNew (Levantando el estado)
  //   handleChange = e => {
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };

  handleClick = () => {
    console.log('Button was Clicked');
  };

  handleSubmit = e => {
    console.log('form was submit');
    console.log(this.props.formValues);
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <h1>New Attender</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='firstName'
              value={this.props.formValues.firstName}
            />
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='lastName'
              value={this.props.formValues.lastName}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input onChange={this.props.onChange} className='form-control' type='text' name='email' value={this.props.formValues.email} />
          </div>
          <div className='form-group'>
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='jobTitle'
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className='form-group'>
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='twitter'
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}
