import React from "react";
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core';
// import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    botonPersonalizado: {
        borderRadius: 10,
        color: 'green'
    }
})

export default function Nav () {
    const estilos = useStyle();

    return (
        <nav >
            <Link to='/home' >
                <Button className={estilos.botonPersonalizado} variant="contained" disableElevation color="secondary" /* endIcon={<DeleteIcon />} */ > Home </Button>
            </Link>
            <Link to='/destination' >
                <p> Destionation </p>
            </Link>
            <Link to='/crew'>
                <p> Crew </p>
            </Link>
            <Link to='/tecnology'>
                <p> Tecnology </p>
            </Link>
        </nav>
    )
}