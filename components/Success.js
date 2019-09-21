import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Confirm from './Confirm';
class Success extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Success"></AppBar>
					<h1>Thanks you </h1>
					<p>you will get an email for further instructions </p>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;
