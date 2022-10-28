import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    secondaryWrapper:{
        width: "100%",
        height: "auto",
    },
    popularNews:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "420px",
        border: ".3px solid rgba(0, 0, 0, 0.3)",
        padding: "0 30px 30px 30px",
        borderRadius: "10px",
    },
    popularNewsDescription: {
        paddingTop: "20px",
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "21.9px",
    },
    popularNewsTitle: {
        padding: "30px 0",
        fontSize: "34px",
        fontWeight: 500,
        lineHeight: "41.9px",
        color: "#BF0000",
    },
    date: {
        paddingTop: "10px",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "17.9px",
        color: "#999999",
    },
    nonActive: {
        maxWidth: "360px",
        height: "150px",
        display: "flex",
        msFlexDirection: "row",
        paddingTop: "15px",
    },
    nonActiveBg: {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderTopLeftRadius: "10px !important",
        borderBottomLeftRadius: "10px !important",
    },
    nonActiveDesc: {
        paddingLeft: "15px",
    },
}))