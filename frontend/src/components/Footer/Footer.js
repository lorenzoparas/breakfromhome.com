import React from 'react';
import useStyles from "./styles";
import Copyright from "../../components/Copyright/Copyright";

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Copyright />
        </footer>
    )
}