import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    groundWrapper:{
        paddingTop: "106px",
    },
    swiper: {
        "--swiper-pagination-color": "#BF0000"
    },
    groundMain: {
      margin: "40px 0",
    },
    groundSingle: {
        width: "1040px",
        height: "204px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "10px !important",
        overflow: "hidden",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "350px",
            height: "450px !important",
            flexDirection: "column",
            alignItems: "start",
            borderRadius: "0 !important",
        },
    },
    singleDesc: {
        flex: 0.5,
        width: "100%",
        height: "100%",
        background: "#BF0000",
        padding: "30px 0 0 31px",
    },
    singleImage: {
        flex: 0.5,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
    },
    moreSee:{
        background: "#fff",
        border: "none",
        color: "#000",
        marginTop: "20px",
        "&:hover": {
            backgroundColor: "#ffff !important",
            opacity: 0.8,
        }
    },
    groundName: {
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: "34px",
        color: "#fff",
    },
    groundAdress: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "24px",
        color: "#fff",
        paddingTop: "16px",
        maxWidth: "300px",
    },
}))
