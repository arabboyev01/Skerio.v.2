import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    mainAreaWrapper: {

    },
    areaWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gridGap:" 48px",
        [theme.breakpoints.down("sm")]:{
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            margin: "0 auto",
        }
    },
    singleAreaCart: {
      maxWidth: "400px",
      maxHeight: "745px",
        display: "flex",
        borderRadius: "10px",
        overflow: "hidden",
        flexDirection: "column",
        backgroundImage: "linear-gradient(256.41deg, rgba(250, 0, 0, 0.97) -16.35%, #BF0000 69.84%, #4B4B4B 140.07%);",
        color: "#fff",
        [theme.breakpoints.down("sm")]:{
            margin: "0 20px",
        }
    },
    areaCartImages: {
        width: "100%",
        height: "450px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
    },
    areaCartDesc:{
        width: "100%",
        height: "305px",
    },
    areaCartTitle: {
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: "36px",
        padding: "21px 0 20px 30px",
    },
    cartDesc: {
        display: "flex",
        flexDirection: "row",
        padding: "0 30px",
    },
    cartLeft: {
        flex: "0.6",
    },
    cartRight: {
        flex: "0.4",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px 0",
    },
    icon: {
        width: "25px",
        height: "25px",
        marginRight: "10px",
    },
    text: {

    },
    iconImages: {
        width: "25px",
        height: "25px",
        objectFit: "contain",
    },
}))
