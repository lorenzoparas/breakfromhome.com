import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import useStyles from "./styles";

export default function HomeButtons() {
    const classes = useStyles();

    return (
        <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Link href="/signUp" variant="h2">
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Sign Up
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/login" variant="h2">
                        <Button
                            variant="outlined"
                            color="primary"
                        >
                            I have an account
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}