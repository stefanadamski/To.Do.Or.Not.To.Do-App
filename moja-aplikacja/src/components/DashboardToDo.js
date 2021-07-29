import React from 'react';
import Todos from "./Todos";
import ShowTodos from "./ShowTodos";
import { Link } from 'react-router-dom';
import  '../CSS/main.css';
import SimpleModal from "./Modal";

const DashboardToDo = () => {
    return (
        <div className='whiteListContainer'>
            <h1 className='whiteListTitle'> white.list </h1>
            <p className='whiteListDescription'>
                Ready? Steady? Go! Make your best! But do not overdo! <br/>
                In case... just go to the <Link to="/blackList" className='boldLinkBlack'> black list </Link>
                and relax...
            </p>
            <div className='todos'>
                <Todos/>
                <ShowTodos/>
                <SimpleModal/>
            </div>
        </div>
    );
};

export default DashboardToDo;