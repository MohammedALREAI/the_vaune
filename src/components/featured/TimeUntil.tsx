import React, { PureComponent } from "react";
import { Slide } from "react-reveal";
import { getTime } from "../../utils/foramtDate";

class TimeUntil extends PureComponent {
    state = {
        deadline: Date.parse(new Date() + "") + (((1000 * 60 * 60 * 24) * 10)),
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
    }

    getTimeUntil() {
        const {
            days,
            hours,
            minutes,
            seconds,
        } = getTime(this.state.deadline);
        this.setState({
            days,
            hours,
            minutes,
            seconds,
        });
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(), 1000);
    }

    componentWillUnmount() {
        // clearInterval(this.getTimeUntil);
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                Hs
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                Min
                            </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                Sec
                            </div>
                        </div>
                    </div>
                </div>

            </Slide>

        );
    }
}

export default TimeUntil;
