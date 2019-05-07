import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

export default class BadgeNew extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarURL=''
              />
            </div>
            <div className='col-6'>
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
