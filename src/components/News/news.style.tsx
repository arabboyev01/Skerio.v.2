import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    newsWrapper: {
        width: "100%",
        height: "auto",
    },
    newsContainer: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            height: "auto",
            margin: "0 20px",
        },
    },
    specialNews: {
        flex: 0.7,
    },
    secondaryNews: {
        flex: 0.3,
    },
    singleSpecial: {
        overflow: "none !important",
        display: "flex",
        flexDirection: "row",
        height: "470px",
        maxWidth: "870px",
        border: "0.3px solid rgba(0, 0, 0, 0.3)",
        borderRadius: "10px ",
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            height: "700px",
        },
    },
    imageBackground: {
        backgroundPosition: "center center",
        backgroundSize: "cover",
        flex: "0.5",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        [theme.breakpoints.down('sm')]: {
            flex: "1",
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "0",
        },
    },
    specialNewsDesc: {
        flex: "0.5",
        [theme.breakpoints.down('sm')]: {
            flex: "1",
        },
    },
    dates: {
        display: "flex",
        flexDirection: "row",
        fontWeight: 600,
        fontSize: "19px",
        color: "#999999",
        padding: "40px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
            padding: "20px",
        },
    },
    newsTitle: {
        maxWidth: "401px",
        padding: "36px 15px 10px 15px",
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: "29px",
        [theme.breakpoints.down('sm')]: {
            padding: "15px 15px 10px 15px",
        },
    },
    newsDesk: {
        padding: "1px 15px 10px 15px",
    },
    ordinaryNews: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    },
    ordinaryNewsSingle: {
        width: "420px",
        height: "auto",
        paddingTop: "20px",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "330px",
        },
    },
    ordinaryImages: {
        width:"100%",
        height: "250px",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
    },
    ordinaryDesc: {
        height: "auto",
        marginTop: "20px",
    },
}))
