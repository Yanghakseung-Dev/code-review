import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import './Timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mtNow: moment(),
    };
  }

  checkExpired = () => {
    console.log('checkExpired', this);
    const {expireDate} = this.props;
    const {mtNow} = this.state;
    const mtExpire = moment(expireDate);
    return mtExpire < mtNow;
  };

  componentDidMount() {
    if (!this.checkExpired()) {
      this.nTimer = setInterval(() => {
        this.setState({mtNow: moment()});
      }, 1000);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.checkExpired()) {
      clearInterval(this.nTimer);
    }
  }

  render() {
    const {expireDate} = this.props;
    const {mtNow} = this.state;
    const mtExpire = moment(expireDate);

    const isExpired = mtExpire < mtNow;
    console.log(isExpired);
    return (
      <div className="Timer">
        <div>{`현재 시간은 ${mtNow.format('A h:mm')}`}</div>
        {isExpired ? <div>{` 종료`}</div> : <div>{` ${mtExpire.fromNow()} 남았습니다.`}</div>}
      </div>
    );
  }
}
export default Timer;
