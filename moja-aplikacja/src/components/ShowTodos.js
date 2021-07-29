import React, { useState } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import '../CSS/main.css'
import {
    addTodos,
    completeTodos,
    removeTodos,
    updateTodos,
} from "../redux/reducer";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

const ShowTodos = (props) => {
    const [sort, setSort] = useState("active");
    return (
        <div className="showTodos">
            <h2 className='editTask'> Yes, you can edit the task and make it... a little<br/>
                bit easier. You can also search and most <br/>
                importantly complete the tasks!
            </h2>
            <div>
                <button className="searchButtons" onClick={() => setSort("active")}> Not yet done </button>
                <button className="searchButtons" onClick={() => setSort("completed")}> Done already </button>
                <button className="searchButtons" onClick={() => setSort("all")}> All of them </button>
            </div>
            <div className='taskElement'>
                {props.todos.length > 0 && sort === "active"
                    ? props.todos.map((item) => {
                        return (
                            item.completed === false && (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />

                            )
                        );
                    })
                    : null}
                {props.todos.length > 0 && sort === "completed"
                    ? props.todos.map((item) => {
                        return (
                            item.completed === true && (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )
                        );
                    })
                    : null}
                {props.todos.length > 0 && sort === "all"
                    ? props.todos.map((item) => {
                        return (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        );
                    })
                    : null}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);