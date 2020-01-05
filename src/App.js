import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ButtonBase } from '@material-ui/core'
import Movers from "./Movers"
import Contacts from "./Contacts"
import Business from "./Business"

class App extends React.Component {

	state = {
		text: 'For movers',
		contacts: false
	}

	outputBottom = () => {
		if (this.state.contacts) {
			return <Contacts />
		} else {
			if (this.state.text === 'For movers') {
				return <Movers />
			} else if (this.state.text === 'For business') {
				return <Business />
			}
		}
	}

	render() {
		return (
			<div style={{position: 'absolute', top: 0, right: 0, left: 0}}>
				<div style={{position: 'relative'}}>
					<AppBar position="fixed" color="inherit" style={{height: '8vh'}}>
						<Toolbar>
							<div style={{height: '8vh', width: '100vw', top : 0, left: 0, right: 0, position: 'absolute', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
								<ButtonBase
								style={{flex: 2, display: 'flex', justifyContent: 'center'}}
								disableRipple={true}
								onClick={() => this.setState({...this.state, contacts: false})}
								>
									<b style={{fontSize: '1.3vw'}}>Mover<b style={{color: 'orange'}}>Up</b></b>
								</ButtonBase>
								<ButtonBase
								style={{flex: 5, display: 'flex', justifyContent: 'center'}}
								disableRipple={true}
								onClick={() => this.setState({ text: this.state.text === "For movers" ? "For business" : "For movers", contacts: false })}
								>
									<b style={{fontSize: '1vw'}}>{this.state.text}</b>
								</ButtonBase>
								<ButtonBase
								style={{flex: 5, display: 'flex', justifyContent: 'center'}}
								disableRipple={true}
								onClick={() => this.setState({...this.state, contacts: true})}
								>
									<b style={{fontSize: '1vw'}}>Contacts</b>
								</ButtonBase>
							</div>
						</Toolbar>
					</AppBar>
					{this.outputBottom()}
				</div>
			</div>
		);
	}
}

export default App;
