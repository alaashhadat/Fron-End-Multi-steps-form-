import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Confirm from './Confirm';
class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter user details "></AppBar>
					<TextField
						hintText="Enter your first name"
						floatinglabeltext="First name"
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}></TextField>
					<br></br>
					<TextField
						hintText="Enter your last name"
						floatinglabeltext="last name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}></TextField>
					<br></br>
					<TextField
						hintText="Enter your email"
						floatinglabeltext="email"
						onChange={handleChange('email')}
						defaultValue={values.email}></TextField>
					<br></br>
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}></RaisedButton>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button: {
		margin: 15,
	},
};
export default FormUserDetails;
