import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    storeWrapper: {
        height: "auto",
        marginTop: "60px",
        overflow: "hidden",
        [theme.breakpoints.down('sm')]: {
            marginTop: "50px",
        },
    },
    swiper: {
        "--swiper-pagination-color": "#BF0000",
    },
    singleCart: {
        width: "240px",
        height: "auto",
        overflow: "none",
        marginRight: "4rem !important",
        marginBottom: "40px",
        border: ".2px solid rgba(191, 0, 0, 0.3)",
        marginLeft: "2px",
        borderRadius: "10px",
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
        padding: "10px",
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
        padding: "5px",
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
