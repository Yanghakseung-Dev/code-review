import React from 'react';
import {Button, Input, Modal} from 'antd';
import './Counter.less';

const Search = Input.Search;

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      open: false,
      list: [1, 2, 3, 4, 5],
    };
  }

  handleClick = e => {
    const {list} = this.state;
    let num = Math.random() * 1000;
    console.log(num);
    list.push(Math.ceil(num));

    this.setState({list: list});
    this.forceUpdate();
  };

  handleSearch = value => {
    console.log(value);
  };

  render() {
    console.log('Render...');
    return (
      <div className="APP">
        <header className="App-header">
          <Modal title="Basic Modal" visible={this.state.open}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          <Search
            className={'Search'}
            placeholder="input search text"
            onSearch={this.handleSearch}
            enterButton
            style={{width: 320}}
          />
          {this.state.list.map((item, idx) => {
            return <div key={`list-item-${idx}`}>{item}</div>;
          })}
          <Button onClick={this.handleClick}>카운터</Button>
        </header>
      </div>
    );
  }
}

export default Counter;
