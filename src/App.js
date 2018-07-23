import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notification from "react-web-notification";

class App extends Component {

	state={
		showNotification: false,
		notificationOptions: {}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				showNotification: true,
				notificationOptions: {
					tag: new Date(Date.now()).getTime(),
					body: `Notification from ${new Date(Date.now()).toString()}`
				}
			})
		}, 3000);
	}

	render() {
		return (
			<div>
				<Notification
					ignore={!this.state.showNotification}
					notSupported={() => console.log("Notification not supported")}
					onPermissionGranted={() => console.log("Permission Granted")}
					onPermissionDenied={() => console.log("Permission Denied")}
					onShow={() => {
						console.log("Notification showed!");
						this.setState({showNotification: false})
					}}
					timeout={5000}
					title={"Ping!"}
					options={this.state.notificationOptions}

				/>
				<div style={{margin: 10}}>
					<button
						onClick={() => this.setState({
							showNotification: true,
							notificationOptions: {
								tag: new Date(Date.now()).getTime(),
								body: "This is a test notification"
							}
						})}
					>
						Trigger Notifications
					</button>
				</div>
			</div>
		);
	}
}

export default App;
