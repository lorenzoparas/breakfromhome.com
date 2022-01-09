import React from 'react';
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import HomeButtons from "./HomeButtons";

export default function HomeBody() {
    const classes = useStyles();

    return (
        <main className={classes.mainPage}>
            <div className={classes.heroContent}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Get Started
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    Improve your physical and mental health whilst
                    getting work done!
                </Typography>
                <HomeButtons/>
            </div>
        </main>
    )
}