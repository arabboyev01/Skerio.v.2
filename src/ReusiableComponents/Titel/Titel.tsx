import useStyles from "./titels.style";
import {Box} from "@material-ui/core";
import {Typography} from "@mui/material";

export default function Title({header}: any){
    const classes = useStyles();
    return(
        <Box className={classes.titlesWrapper}>
            <Typography className={classes.titleItem}>{header}</Typography>
        </Box>
    )
}
