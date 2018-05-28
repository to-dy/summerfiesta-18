import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    leading0(num) {
        return num < 10 ? '0' + num : num;
    }
    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({ days, hours, minutes, seconds });
        }
    }
    render() {
        return (

            <div className="countdown" id="countdown">

                <div className="day">

                    <div id="day">{this.leading0(this.state.days)}</div>
                    <p>{this.state.days === 1 ? 'DAY' : 'DAYS'}</p>

                </div>

                <div className="hr">

                    <div id="hr">{this.leading0(this.state.hours)}</div>
                    <p>{this.state.hours === 1 ? 'HOUR' : 'HOURS'}</p>

                </div>

                <div className="min">

                    <div id="min">{this.leading0(this.state.minutes)}</div>
                    <p>{this.state.minutes === 1 ? 'MINUTE' : 'MINUTES'}</p>

                </div>

                <div className="sec">

                    <div id="sec">{this.leading0(this.state.seconds)}</div>
                    <p>{this.state.seconds === 1 ? 'SECOND' : 'SECONDS'}</p>

                </div>

            </div>
        );
    }
}
export default Timer;