import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';

class Confirm extends Component {
	continue = e => {
		e.preventDefault();
		// process form

		this.props.nextStep();
	};
	back = e => {
		e.preventDefault();
		this.props.previousStep();
	};
	render() {
		const {
			values: { firstName, lastName, bio, email, occupation, city },
		} = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Confirm User Data " />

					<List>
						<ListItem primaryText="First Name" secondaryText={firstName} />
						<ListItem primaryText="Last Name" secondaryText={lastName} />
						<ListItem primaryText="Email" secondaryText={email} />
						<ListItem primaryText="Occupation" secondaryText={occupation} />
						<ListItem primaryText="Bio" secondaryText={bio} />
						<ListItem primaryText="City" secondaryText={city} />
					</List>

					<RaisedButton
						label="Confirm and continue"
						primary={true}
						style={styles.button}
						onClick={this.continue}></RaisedButton>
				</React.Fragment>
				<RaisedButton
					label="back"
					primary={true}
					style={styles.button}
					onClick={this.back}></RaisedButton>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button: {
		margin: 15,
	},
};
export default Confirm;
