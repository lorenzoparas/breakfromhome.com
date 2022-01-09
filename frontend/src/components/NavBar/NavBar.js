import React from "react";
import {
    Typography,
    AppBar,
    Toolbar,
    Button,
    IconButton,
} from "@material-ui/core/";
import icon from "../../images/logo.png";

import useStyles from "./styles";

const NavBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton href="/home">
                    <img alt="logo" src={icon} height={60} width={140} />
                </IconButton>
                <div className={classes.navButtons}>
                    <Button
                        className={classes.btnLogin}
                        href="/login"
                        color="inherit"
                    >
                        Login
                    </Button>
                    <Button
                        className={classes.btnLogin}
                        href="/signUp"
                        color="inherit"
                    >
                        Register
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
