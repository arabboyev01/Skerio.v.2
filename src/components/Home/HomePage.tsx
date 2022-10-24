import {Box} from "@material-ui/core";
import useStyles from "./HomePage.style"
import {Typography} from "@mui/material";
import Schedule from "./Schedule";
import Store from "./Store/Store";
import Statistics from "./Statistic/Statistics";
import Grounds from "./Grounds/Grounds";


export default function HomePage(){

    const classes = useStyles();

    return(
        <Box className={classes.HomePageContainer}>
            <Box className={classes.homePageWrapper}>
                <Typography className={classes.heading}>
                    When you don’t give up,
                    You cannot fail
                </Typography>
                <Typography className={classes.paragraph}>
                    “It’s heavy duty to try to do everything and please everybody. My job was to go out there and play the game of basketball as best I can. People may not agree with that. I can’t live with what everyone’s impression of what I should or what I shouldn’t do.” <br/> Maykl Jordan
                </Typography>
            </Box>
            <Schedule />
            <Store />
            <Statistics />
            <Grounds />
        </Box>
    )
}
