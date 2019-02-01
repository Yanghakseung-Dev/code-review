import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.less';
import {Input, Button} from 'antd';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    //AddClick
    this.handleAddClick = this.handleAddClick.bind(this);
    //AllSelectedClick
    this.handleAllSelectedClick = this.handleAllSelectedClick.bind(this);
    // 입력 값
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.id = 3;
    this.state = {
      items: [
        {id: 0, name: 'React 개발에 필요한 환경을 구축한다', completed: true},
        {id: 1, name: '새로운 자바스크립트 문법을 익힌다 ES2015(ES6) ,ES7, ES8', completed: false},
        {id: 2, name: '새로운 자바스크립트 문법을 익힌다 ES2015(ES6) ,ES7, ES8', completed: true},
      ],
      inputValue: '',
    };
  }

  handleDeleteClick = id => {
    const {items} = this.state;
    // console.log(id, items, items.splice(id, 1));

    // this.setState({
    //   items: items.splice(id, 1),
    // });

    this.setState({
      items: items.filter(items => items.id !== id),
    });
  };

  handleAddClick = e => {
    const {items} = this.state;
    this.setState({
      items: [{id: this.id++, name: this.state.inputValue, completed: false}, ...items],
    });
    e.preventDefault();
  };

  handleAllSelectedClick = e => {
    console.log('allSelectedClick', this, e);
    let {items} = this.state;
    this.setState({
      items: items.map(item => {
        item.completed = true;
        return item;
      }),
    });
    console.log(this.state);
  };

  handleInputChange = ({target}) => {
    this.setState({inputValue: target.value});
  };

  render() {
    const {items} = this.state;
    console.log(this.state);
    const completed_cnt = items.filter(item => {
      return item.completed;
    }).length;

    return (
      <div className="TodoList">
        <div style={{marginBottom: 16}}>
          <form onSubmit={this.handleAddClick}>
            <Input
              addonAfter={<Button type="primary" htmlType="submit" key="submit" icon="plus" />}
              defaultValue=""
              placeholder={'할일을 입력하세요'}
              onChange={this.handleInputChange}
            />
          </form>
        </div>
        <ul>
          {items.map((item, index) => {
            return <TodoListItem {...item} key={`item-${index}`} onDelete={this.handleDeleteClick} />;
          })}
        </ul>
        <div>
          <Button onClick={this.handleAllSelectedClick}>전체선택</Button> <span>할일 : </span>
          {items.length - completed_cnt}
          <span>완료 : </span>
          {completed_cnt}
        </div>
      </div>
    );
  }
}
export default TodoList;
