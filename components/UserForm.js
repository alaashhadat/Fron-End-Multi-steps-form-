import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
class UserForm extends Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		occupation: '',
		city: '',
		bio: '',
	};
	// proceed to the next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};
	// go back to previous step
	previousStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};
	// handle fields change
	handleChange = input => event => {
		this.setState({ [input]: event.target.value });
	};
	render() {
		const { step, firstName, lastName, email, occupation, city, bio } = this.state;
		const values = { step, firstName, lastName, email, occupation, city, bio };
		switch (step) {
			case 1:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						previousStep={this.previousStep}
						handleChange={this.handleChange}
						values={values}></FormPersonalDetails>
				);
			case 3:
				return (
					<Confirm nextStep={this.nextStep} previousStep={this.previousStep} values={values} />
				);
			case 4:
				return <Success />;
		}
	}
}
export default UserForm;
