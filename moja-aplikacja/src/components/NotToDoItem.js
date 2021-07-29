import { Delete } from '@material-ui/icons';
import '../CSS/main.css'

const NotTodoItem = (props) => {
    const { item, removeTodo } = props;

    return (
        <div key={item.id} className="editingTask">
            <div className='taskToRemove'> {item.item} </div>
            <button className="iconButton" onClick={() => removeTodo(item.id)}>
                <Delete style={{ fontSize: 30 }}/>
            </button>
        </div>
    );
};

export default NotTodoItem;