import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    filterWrapper: {
        width: "100%",
        padding: "40px 0 30px 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    dropDown: {
        maxWidth: "150px",
        margin: "0 35px 0 0",
        [theme.breakpoints.down('md')]: {
            margin: "0 15px 0 20px",
        },
    },
}))
