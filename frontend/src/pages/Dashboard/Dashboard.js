import React from 'react';
import useStyles from "./styles";

import NavBar from "../../components/NavBar/NavBar";
import NavBarLogin from "../../components/NavBarLogin/NavBarLogin";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import Copyright from "../../components/Copyright/Copyright";

export default function Dashboard() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {(sessionStorage.getItem("loggedInUser") == null) ? <NavBar/> : <NavBarLogin/>}
            <main className={classes.mainPage}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Hello,{" "}
                            {
                                JSON.parse(
                                    sessionStorage.getItem("loggedInUser")
                                )["username"]
                            }
                            !
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Choose a list of your favourite websites, set
                            your work and break times and we take care of
                            the rest!
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Link href="/preferences" variant="h2">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                        >
                                            Create my preferences
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/break" variant="h2">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                        >
                                            Start my timer
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md"/>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Hackiethon2021
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    This is a submission for Hackiethon2021
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    )
}