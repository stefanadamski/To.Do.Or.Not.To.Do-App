import React, { useState } from "react";
import { connect } from "react-redux";
import '../CSS/main.css'
import { removeTodos } from "../redux/reducer";
import NotTodoItem from "./NotToDoItem";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return { removeTodo: (id) => dispatch(removeTodos(id))};
};

const ShowNotTodos = (props) => {
    const [sort, setSort] = useState("all");
    return (
        <div className="showTodos">
            <h2 className='editTask'> On the other hand try to stay calm.<br/>
                Don't delete everything. <br/>
            </h2>
            <div>
                <button className="searchButtons" onClick={() => setSort("active")}> Not yet done </button>
                <button className="searchButtons" onClick={() => setSort("completed")}> Done already </button>
                <button className="searchButtons" onClick={() => setSort("all")}> All of them </button>
            </div>
            <div>
                {props.todos.length > 0 && sort === "active"
                    ? props.todos.map((item) => {
                        return (
                            item.completed === false && (
                                <NotTodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                />
                            )
                        );
                    })
                    : null}
                {props.todos.length > 0 && sort === "completed"
                    ? props.todos.map((item) => {
                        return (
                            item.completed === true && (
                                <NotTodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                />
                            )
                        );
                    })
                    : null}
                {props.todos.length > 0 && sort === "all"
                    ? props.todos.map((item) => {
                        return (
                            <NotTodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                            />
                        );
                    })
                    : null}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNotTodos);