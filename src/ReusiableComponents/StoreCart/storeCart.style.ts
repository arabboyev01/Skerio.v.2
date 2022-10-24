import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    storeWrapper: {
        height: "auto",
        marginTop: "106px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "80px",
        },
    },
    swiper: {
        "--swiper-pagination-color": "#BF0000",
    },
    singleCart: {
        width: "219px",
        height: "400px",
        overflow: "none",
        marginRight: "4rem !important",
        background: "#fff",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            width: "250px !important",
            flexDirection: "column",
            marginLeft: "4rem !important",
        },
    },
    cartHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px 10px 0 0",
        background: "#333",
        padding: "10px 3px",
    },
    likeTrue: {
        fontSize: "1.8rem",
        color: "#BF0000",
        cursor: "pointer",
    },
    likeFalse: {
        fontSize: "1.8rem",
        color: "#BF0000",
        cursor: "pointer",
    },
    bodyImage:{
        height: "255px",
        width: "204px",
        marginTop: "20px",
    },
    cartImage: {
        objectFit: "contain",
    },
    cartFooter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "50px",
        background: "#BF0000",
        borderRadius: "0 0 10px 10px",
        padding: "0 5px",
    },
    price: {
        fontSize: "1.1rem",
        color: "#fff",
    },
    cart: {
        fontSize: "1.8rem",
        color: "#fff",
    }
}))
