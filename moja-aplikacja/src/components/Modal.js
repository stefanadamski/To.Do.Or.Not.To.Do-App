import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: '34%',
        left: '34%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const quotes = ["'The secret of getting ahead is getting started.'",
        "'It’s hard to beat a person who never gives up.'" ,
        "'Everything you can imagine is real.'",
        "'Do one thing every day that scares you.'",
        "'Hold the vision, trust the process.'"];

    const body = (
        <div className={classes.paper} style={{ width: "32%"}}  >
            <h1 className='modalTitle'> {quotes[Math.ceil((Math.random() * quotes.length-1))]} </h1>
        </div>
    );

    return (
        <div>
            <button onClick={handleOpen} className='modalButton'>Click me! Get some extra motivation!</button>
            <Modal open={open} onClose={handleClose}>
                {body}
            </Modal>
        </div>
    );
}