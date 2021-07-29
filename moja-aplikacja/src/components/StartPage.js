import '../CSS/main.css'
import { useHistory } from "react-router-dom";

function StartPage() {
    let history = useHistory();
    const redirectToWhiteList = () => {
        history.push("/whiteList");
    }
    const redirectToBlackList = () => {
        history.push("/blackList");
    }
    return (
        <div className="startPageContainer">
            <header className="startPageHeader">
                <h1 className="startPageTitle">
                    To.Do.Or.Not.To.Do
                </h1>
                <div className='startOptions'>
                    <button className='buttonWhite' onClick={redirectToWhiteList}> ToDo list </button>
                    <button className='buttonBlack' onClick={redirectToBlackList}> NotToDo list</button>
                </div>
            </header>
        </div>
    );
}

export default StartPage;