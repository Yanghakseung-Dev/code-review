import React from 'react';
import {Checkbox, Icon, Button} from 'antd';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () => {
    console.log(this.props);
    const {id, onDelete} = this.props;
    onDelete(id);
  };

  handleEdit = () => {
    console.log(this.props);
    const {id, name, completed, onEdit} = this.props;
    if (onEdit != undefined) {
      onEdit({id: id, name: name, completed: completed});
    }
  };

  handleCheckChange = () => {
    const {id, name, completed, onCheckChange} = this.props;
    if (onCheckChange != undefined) {
      onCheckChange({id: id, name: name, completed: completed});
    }
  };

  render() {
    const {name, completed} = this.props;

    return (
      <li className="TodoListItem">
        <Checkbox checked={completed} onChange={this.handleCheckChange} />
        <span>{name}</span>

        <Button icon={'edit'} onClick={this.handleEdit} />
        <Button icon={'delete'} onClick={this.handleDelete} className={completed ? '' : 'btn-delete'} />
      </li>
    );
  }
}
export default TodoListItem;
