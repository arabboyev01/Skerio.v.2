import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    navbarWrapper: {
        padding: "25px 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down('md')]: {
            margin: "0 30px",
        },
    },
    logo: {
        color: "#BF0000",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: "42px",
        lineHeight: "51.2px",
        [theme.breakpoints.down('md')]: {
            fontSize: "24px",
            lineHeight: "25.2px",
        },
    },
    mainBlock: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    activeNavbar: {
        display: "none",
        [theme.breakpoints.down('sm')]: {
            position: "fixed",
            top: "-500px",
            right: "0",
            display:"flex",
            flexDirection: "column",
            alignItems: "start",
            width: "200px",
            height: "calc(500px + 100vh)",
            paddingTop: "550px",
            background: "#000",
            transitionDuration: "1s easy-out",
            transitionTimingFunction: "linear",
            zIndex: 1000,
        },
    },
    singleName: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "22px",
        paddingRight: "30px",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            paddingRight: "0",
            paddingTop: "30px",
            color: "#fff",
            paddingLeft: "50px",
        },
    },
    hamburgerMenu: {
        display: "none",
        zIndex: 1000,
        [theme.breakpoints.down('sm')]: {
            display:"block",
        },
    },
    dropDown: {
        maxWidth: "100px",
        margin: "0 15px",
        [theme.breakpoints.down('sm')]: {
            margin: "0",
            paddingTop: "30px",
            paddingLeft: "50px",
            maxWidth: "145px",
        },
    },
    loginPage: {
        marginLeft: "30px",
    },
    loginBtn: {
        background: "#BF0000",
        border: "none",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#BF0000 !important",
            opacity: 0.8,
        }
    }
}))
