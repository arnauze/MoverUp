import React from 'react'
import { ButtonBase } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

export default class Contacts extends React.Component {

    state = {
        full_name: '',
        email: '',
        message: ''
    }

    onSubmit = () => {
        console.log("Submitting form")
        var emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailValid) {
            this.setState({
                full_name: '',
                email: '',
                message: ''
            })
        } else {
            console.log("Wrong email")
        }
    }

    onChangeFullName = (e) => {
        var text = e.target.value
        this.setState({
            ...this.state,
            full_name: text
        })
    }

    onChangeEmail = (e) => {
        var text = e.target.value
        this.setState({
            ...this.state,
            email: text
        })
    }

    onChangeMessage = (e) => {
        var text = e.target.value
        this.setState({
            ...this.state,
            message: text
        })
    }

    render() {
        return (
            <div style={{width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '8vh', left: 0, position: 'relative'}}>
                <div style={{display: 'flex', flexDirection: "column", width: '50vw', alignItems: 'center'}}>
                    <b style={{marginTop: '2vh'}}>
                        Contact Us
                    </b>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Full Name"
                    value={this.state.full_name}
                    onChange={this.onChangeFullName}
                    style={{width: '35vw', height: '5vh', fontSize: '1vw', marginTop: '2.5vh', marginBottom: '2.5vh'}}
                    />
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    style={{width: '35vw', height: '5vh', fontSize: '1vw', marginTop: '2.5vh', marginBottom: '2.5vh'}}
                    />
                    <TextField
                    multiline
                    id="outlined-basic"
                    variant="outlined"
                    rows={10}
                    label="Message"
                    value={this.state.message}
                    onChange={this.onChangeMessage}
                    style={{width: '35vw', fontSize: '1vw', marginTop: '2.5vh', marginBottom: '2.5vh'}}
                    />
                    <ButtonBase
                    style={{width: '35vw', height: '5vh', backgroundColor: '#F9F9F9', marginTop: '2.5vh', marginBottom: '2.5vh', outline: 'none'}}
                    onClick={this.onSubmit}
                    >
                        <b>Submit</b>
                    </ButtonBase>
                </div>
            </div>
        )
    }
}