import React, { Component } from 'react';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeEdit.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

export default class BadgeEdit extends Component {
  state = {
    form: {
      loading: true,
      error: null,
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      // debugger;
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className='BadgeEdit__hero'>
          <img className='BadgeEdit__hero-image img-fluid' src={header} alt='logo' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                twitter={this.state.form.twitter || 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'Emal'}
              />
            </div>
            <div className='col-6'>
              <h1>Edit Attender</h1>
              <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
