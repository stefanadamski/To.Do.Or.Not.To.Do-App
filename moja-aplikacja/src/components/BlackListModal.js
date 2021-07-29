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

export default function BlackListModal() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const quotes = ["'You have to make the good out of the bad because that is all you have got to make it out of.'",
        "'Happy people do not wake up for breakfast.'" ,
        "'Try & try until you cannot succeed.'",
        "'Nothing says 'you're a loser' more than owning a motivational poster about being a winner'",
        "'Accept that you're just a product, not a gift'"];

    const body = (
        <div className={classes.paper} style={{ width: "32%"}}  >
            <h1 className='modalTitle'> {quotes[Math.ceil((Math.random() * quotes.length-1))]} </h1>
        </div>
    );

    return (
        <div>
            <button onClick={handleOpen} className='modalButton'>Click me! Get some extra (de)motivation!</button>
            <Modal open={open} onClose={handleClose}>
                {body}
            </Modal>
        </div>
    );
}