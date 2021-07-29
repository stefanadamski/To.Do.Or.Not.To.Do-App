import React, {useRef} from "react";
import { Check } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import '../CSS/main.css'

const TodoItem = (props) => {
    const { item, updateTodo, completeTodo } = props;
    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const update = (id, value, e) => {
        if (e.which === 13) {
            updateTodo({ id, item: value });
            inputRef.current.disabled = true;
        }
    };
    return (
        <div key={item.id} className="editingTask">
            <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                className='textArea'
                onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
            />
            <div>
                <button className='iconButton' onClick={() => changeFocus()}>
                    <EditIcon style={{ fontSize: 30 }}/>
                </button>
                {item.completed === false && (
                    <button className="iconButton" onClick={() => completeTodo(item.id)}>
                        <Check style={{ fontSize: 30 }}/>
                    </button>
                )}
            </div>
            {item.completed && <div className="iconButton">Done!</div>}
        </div>
    );
};

export default TodoItem;


