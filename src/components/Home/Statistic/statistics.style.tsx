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
        maxHeight: "360px",
        overflowY: "auto",
        cursor: "pointer",
        borderLeft: ".2px solid rgba(0, 0, 0, 0.5)",
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
        padding: "10px",
        borderBottom: ".2px solid rgba(0, 0, 0, 0.2)",
        paddingBottom: "0",
        maxHeight: "110px",
    },
    activePlayer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        paddingBottom: "5px",
        background: "#F4F4F4",
        color: "#BF0000",
        maxHeight: "110px",
        borderBottom: ".2px solid rgba(191, 0, 0, 0.5)",
        borderLeft: ".2px solid rgba(191, 0, 0, 0.5)",
    },
    playerName:{
        maxWidth: "253px",
        fontWeight: 500,
        fontSize: "22px",
        lineHeight: "26px",
    },
    playerBio: {
        maxWidth: "250px",
        padding: "34px 0",
        marginRight: "80px",
        marginLeft: "30px",
        [theme.breakpoints.down('sm')]: {
            margin: "0 0",
        },
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
    resultTable: {
        padding: "34px 0",
    },
    tableHeader: {
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "29px",
    },
    teamResult: {
        marginTop: "20px",
        paddingBottom: "20px",
        borderBottom: ".2px solid rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
}))
