import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    mainShopWrapper: {
        width: "100%",
        height: "auto",
    },
    shopSingleItem: {
        height: "400px",
        width: "100%",
        [theme.breakpoints.down("md")]:{
            height: "600px",
        }
    },
    shopImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: "10px",
    }
}))
