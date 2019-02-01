import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.less';
import {Input, Button, Modal} from 'antd';

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
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleCheckChangeClick = this.handleCheckChangeClick.bind(this);
    this.id = 3;
    this.editItem = {id: 0, name: '', completed: false};
    this.state = {
      items: [
        {id: 0, name: 'React 개발에 필요한 환경을 구축한다', completed: true},
        {id: 1, name: '새로운 자바스크립트 문법을 익힌다 ES2015(ES6) ,ES7, ES8', completed: false},
        {id: 2, name: '새로운 자바스크립트 문법을 익힌다 ES2015(ES6) ,ES7, ES8', completed: true},
      ],
      inputValue: '',
      editModalvisible: false,
      editInputValue: '',
    };
  }

  handleCheckChangeClick = e => {
    console.log('check ' + e.id + e.completed);

    const {items} = this.state;
    this.setState({
      editModalvisible: false,
      items: items.map(item => (item.id === e.id ? {...item, completed: !e.completed} : item)),
    });
  };

  handleDeleteClick = id => {
    const {items} = this.state;
    this.setState({
      items: items.filter(items => items.id !== id),
    });
  };

  handleAddClick = e => {
    const {items} = this.state;
    this.setState({
      items: [...items, {id: this.id++, name: this.state.inputValue, completed: false}],
    });
    e.preventDefault();
  };

  handleEditClick = e => {
    console.log('Edit', e);
    this.setState({
      editModalvisible: true,
      editInputValue: e.name,
    });
    this.editItem.id = e.id;
    this.editItem.completed = e.completed;
  };

  handleOk = e => {
    const {items} = this.state;
    this.setState({
      editModalvisible: false,
      //items: [...items],
      items: items.map(item => (item.id === this.editItem.id ? {...item, name: this.state.editInputValue} : item)),
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      editModalvisible: false,
    });
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

  handleEditInputChange = ({target}) => {
    this.setState({editInputValue: target.value});
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
            return (
              <TodoListItem
                {...item}
                key={`item-${index}`}
                onEdit={this.handleEditClick}
                onDelete={this.handleDeleteClick}
                onCheckChange={this.handleCheckChangeClick}
              />
            );
          })}
        </ul>
        <div>
          <Button onClick={this.handleAllSelectedClick}>전체선택</Button> <span>할일 : </span>
          {items.length - completed_cnt}
          <span>완료 : </span>
          {completed_cnt}
        </div>
        <Modal title="수정" visible={this.state.editModalvisible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Input value={this.state.editInputValue} onChange={this.handleEditInputChange} />
        </Modal>
      </div>
    );
  }
}
export default TodoList;
