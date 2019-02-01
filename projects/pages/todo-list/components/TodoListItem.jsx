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

  render() {
    const {name, completed} = this.props;

    return (
      <li className="TodoListItem">
        <Checkbox checked={completed} />
        <span>{name}</span>

        <Button icon={'edit'} />
        <Button icon={'delete'} onClick={this.handleDelete} className={completed ? '' : 'btn-delete'} />
      </li>
    );
  }
}
export default TodoListItem;
