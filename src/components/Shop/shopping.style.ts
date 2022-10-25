import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    mainShopWrapper: {
        width: "100%",
        height: "auto",
    },
    shopSingleItem: {
        height: "400px",
        width: "100%",
        overflow: "none",
        borderRadius: "10px",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        [theme.breakpoints.down("md")]:{
            height: "400px",
            borderRadius: "0",
        }
    },
}))
