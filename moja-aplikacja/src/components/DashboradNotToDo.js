import React from 'react';
import  '../CSS/main.css'
import ShowNotTodos from "./ShowNotToDos";
import {Link} from "react-router-dom";
import BlackListModal from "./BlackListModal";

const DashboardNotToDo = () => {
    return (
        <div className='blackListContainer'>
            <h1 className='blackListTitle'> black.list </h1>
            <p className='blackListDescription'>
                Same tasks? Yeap, but you don't have to do them anymore!<br/>
                Feel free to remove, erase and completely forget!<br/>
                When you're ready again go to the <Link to="/whiteList" className='boldLinkWhite'> white list. </Link>
            </p>
            <div className='todos'>
                <ShowNotTodos/>
                <BlackListModal/>
            </div>
        </div>
    );
};

export default DashboardNotToDo;