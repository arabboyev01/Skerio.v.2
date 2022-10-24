import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    scheduleWrapper:{
        height: "auto",
    },
    singleMatch:{
        width: "360px",
        height: "294px",
        marginTop: "106px",
        [theme.breakpoints.down('sm')]: {
            margin: "80px 0 0 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    },
    swiper: {
        "--swiper-pagination-color": "#BF0000"
    },
    matchHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "360px",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "space-evenly",
        },
    },
    firstImage: {
        marginRight: "25px",
    },
    secondImage: {
        paddingLeft: "25px",
    },
    redLine:{
        width: "90%",
        height: "5px",
        background: "#BF0000",
        marginTop: "18px",
    },
    matchTitle: {
       display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "15px",
    },
    times: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "24px",
    },
    titleConnecter: {
        margin: "0 15px",
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: "24px",
        color: "#BF0000",
    },
    description: {
        paddingTop: "10px",
    },
    desc: {
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "22px",
    },
    moreSee:{
        background: "#BF0000",
        border: "none",
        color: "#fff",
        marginTop: "20px",
        "&:hover": {
            backgroundColor: "#BF0000 !important",
            opacity: 0.8,
        }
    },
}))
