import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    titlesWrapper: {
        paddingTop: "50px",
        [theme.breakpoints.down('sm')]: {
            paddingTop: "30px",
        },
    },
    titleItem:{
        fontSize: "40px",
        lineHeight: "49px",
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px",
            lineHeight: "39px",
            fontWeight: 600,
            marginLeft: "10px",
        },
    }
}))
