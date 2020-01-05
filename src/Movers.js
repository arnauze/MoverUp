import React from 'react'
import MOVER from './Images/movers.png'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

export default class Movers extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{height: '70vh', width: '100vw', display: 'flex', alignItems: 'center', marginTop: '8vh', left: 0, position: 'relative', backgroundImage: 'url(' + MOVER +')', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <div style={{display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column'}}>
                        <h1 style={{fontSize: '3vw'}}>Jobs for movers!</h1>
                        <p style={{fontSize: '2vw', textAlign: 'center'}}>
                            MoverUp helps you find jobs as a mover anytime, anywhere.<br/>
                            Download the app, create your schedule and we will find a job for you.
                        </p>
                    </div>
                    <div style={{display: 'flex', flex: 3, alignItems: 'center' , flexDirection: 'column'}}>
                        <b>Hello</b>
                    </div>
                </div>
                <div style={{height: '50vh', width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid black'}}>
                    <div style={{width: '75vw', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <b>When you want where you want</b>
                        <b>Start earning money in just a few clicks</b>
                        <b>Take a breath while we find the perfect job for you</b>
                    </div>
                </div>
                <div style={{height: '50vh', width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width: '75vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Stepper activeStep={null} alternativeLabel style={{width: '75vw'}}>
                            <Step key={0} active={true}>
                                <StepLabel><b>Get the app</b></StepLabel>
                            </Step>
                            <Step key={1} active={true}>
                                <StepLabel><b>Make a schedule</b></StepLabel>
                            </Step>
                            <Step key={2} active={true}>
                                <StepLabel><b>Accept the job and get paid</b></StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}