import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import '../CSS/main.css';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    console.log("props",props);
    const [todo, setTodo] = useState("");
    const [validate, setValidate] = useState(true);

    const add = () => {
        if (todo === "") {
            setValidate(false);
        } else {
            setValidate(true);
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    };

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    return (
        <div className="addTodos">
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="todoInput"
                placeholder='Your task'
                value={todo}
            />
            {validate === false && (<><p className='inputAlert'> Empty task? You're lazy...:) </p> </>)}
            <div className="buttonWhite">
                <AddCircleIcon style={{ fontSize: 60 }} onClick={() => add()}/>
            </div>
            <div className='taskElement'>
                {props.todos.length > 0 &&
                props.todos.map((item) => {
                    return <div className='oneBox'>
                        <AssignmentIcon style={{ fontSize: 30 }}/>
                        <div key={item.id}>{item.item}</div>
                    </div>;
                })}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);