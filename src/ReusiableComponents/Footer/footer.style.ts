import {makeStyles} from "@material-ui/core";
import footerImage from "../../assets/footerImages/skerio.footer.jpg";


export default makeStyles((theme) => ({
    footerWrapper: {
        backgroundImage: `url(${footerImage.src})`,
        background: "rgba(0, 0, 0, 0.5)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        color: "#fff",
        position: "relative",
        marginBottom: "20px",
        [theme.breakpoints.down('md')]: {
            height: "auto",
            borderRadius: "0",
            marginBottom: "0",
        },
    },
    footerMain: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "10px",
    },
    footerDesc: {
        padding: "50px 0 0 50px",
        [theme.breakpoints.down('md')]: {
            padding: "50px 0 0 20px",
        },
    },
    footerHeader: {
        position: "relative",
        color: 'white',
        fontSize: "28px",
        fontWeight: 700,
        lineHeight: "34px",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        '&::after': {
            content: "",
            width: "50%",
            height: "5px",
            position: "absolute",
            top: "0",
            left: "0",
            background: "#bf0000",
        },
    },
    footerDescription: {
        maxWidth: "367px",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        paddingTop: "20px",
        [theme.breakpoints.down('md')]: {
            maxWidth: "307px",
        },
    },
    socialMediaBox: {
        padding: "50px 0 0 0",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
    },
    icon: {
        marginRight: "10px",
    },
    footerNavbar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px 0 0 20px",
        [theme.breakpoints.down('md')]: {
            alignItems: "start",
            padding: "0 0 0 20px",
        },
    },
    footerContact: {
        padding: "50px 0 0 50px",
        [theme.breakpoints.down('md')]: {
            padding: "50px 0 0 20px",
        },
    },
    footerNavHome: {
        paddingTop: "28px",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "22px",
    },
    footerNavItems:{
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "22px",
        paddingTop: "25px",
    },
    contactInfo: {
        paddingTop: "28px",
    },
    contactIcons: {
    },
    developmentText: {
        color: "white",
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: 500,
        textAlign: "center",
        alignItems: "center",
        paddingTop: "15px",
    }
}))
