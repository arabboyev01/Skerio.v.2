import { makeStyles } from '@material-ui/core';
import BgImage from "../../assets/images/bg.png";

export default makeStyles((theme) => ({
    HomePageContainer:{
        height: "auto",
    },
    homePageWrapper:{
        width: "100%",
        height: "400px",
        backgroundImage:`url(${BgImage.src})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px",
        [theme.breakpoints.down('sm')]: {
            margin: "0 auto",
            borderRadius: "0",
            height: "300px",
        },
    },
    heading: {
        maxWidth: "612px",
        fontSize: "64px",
        lineHeight: "77px",
        fontWeight: 900,
        color: "#fff",
        padding: "67px 0 0 30px",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "400px",
            fontSize: "32px",
            lineHeight: "38.5px",
            fontWeight: 700,
        },
    },
    paragraph: {
        maxWidth: "466px",
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: 400,
        color: "#fff",
        margin: "15px 0 0 30px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
            lineHeight: "18.5px",
        },
    }
}))
