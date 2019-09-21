import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class personalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = e => {
		e.preventDefault();
		this.props.previousStep();
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter personal details "></AppBar>
					<TextField
						hintText="Enter your occupation"
						floatinglabeltext="occupation"
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}></TextField>
					<br></br>
					<TextField
						hintText="Enter your city"
						floatinglabeltext="city"
						onChange={handleChange('city')}
						defaultValue={values.city}></TextField>
					<br></br>
					<TextField
						hintText="Enter bio"
						floatinglabeltext="bio"
						onChange={handleChange('bio')}
						defaultValue={values.bio}></TextField>
					<br></br>
					<RaisedButton
						label="Continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}></RaisedButton>
					<RaisedButton
						label="back"
						primary={true}
						style={styles.button}
						onClick={this.back}></RaisedButton>
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
export default personalDetails;
