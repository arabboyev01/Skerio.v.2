import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    statisticWrapper: {
        width: "100%",
        height: "440px",
        [theme.breakpoints.down('sm')]: {
            height: "auto",
        },
    },
    statisticMain:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    },
    singleInform: {
        flex: "0.7",
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    },
    scrollView:{
        flex: "0.3",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        maxHeight: "440px",
        overflowY: "auto",
        cursor: "pointer",
    },
    playerImage: {
        objectFit: "contain"
    },
    scrollImage: {
        objectFit: "contain",
    },
    scrollSingle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
        borderBottom: ".2px solid rgba(0, 0, 0, 0.5)",
        paddingBottom: "5px",
        borderRadius: "0",
    },
    activePlayer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
        paddingBottom: "5px",
        background: "#F4F4F4",
        color: "#BF0000",
        borderRadius: "5px",
    },
    playerName:{
        maxWidth: "253px",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "29px",
    },
    playerBio: {
        maxWidth: "260px",
        margin: "0 auto",
        padding: "34px 0",
    },
    moreSee:{
        background: "#BF0000",
        border: "none",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#BF0000 !important",
            opacity: 0.8,
        }
    },
    teamName: {
        fontSize: "22px",
        fontWeight: 500,
        lineHeight: "27px",
        paddingTop: "20px",
    },
    teamDesc: {
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "20px",
        paddingTop: "50px",
        paddingBottom: "30px",
    },
}))
