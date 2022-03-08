import React, { PureComponent } from "react";
import { Slide } from "react-reveal";
import { getTime } from "../../utils/foramtDate";
import { CountdownBottom, CountdownItem, CountdownTag, CountdownTime, CountdownWrapper } from "./style";

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
                <CountdownWrapper>
                    <div>
                        Event starts in
                    </div>
                    <CountdownBottom>
                        <CountdownItem>
                            <CountdownTime>
                                {this.state.days}
                            </CountdownTime>
                            <CountdownTag>
                                Days
                            </CountdownTag>
                        </CountdownItem>
                        <CountdownItem>
                            <CountdownTime>
                                {this.state.hours}
                            </CountdownTime>
                            <CountdownTag>
                                Hr
                            </CountdownTag>
                        </CountdownItem>
                        <CountdownItem>
                            <CountdownTime>
                                {this.state.minutes}
                            </CountdownTime>
                            <CountdownTag>
                                Min
                            </CountdownTag>
                        </CountdownItem>
                        <CountdownItem>
                            <CountdownTime>
                                {this.state.seconds}
                            </CountdownTime>
                            <CountdownTag>
                                Sec
                            </CountdownTag>
                        </CountdownItem>

                    </CountdownBottom>
                </CountdownWrapper>

            </Slide >

        );
    }
}

export default TimeUntil;
