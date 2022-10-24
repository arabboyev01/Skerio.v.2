import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    brandWrapper: {
        width: "100%",
    },
    marquee: {
        height: "200px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        margin: "auto",
    },
    marqueeInner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        margin: "50px 0",
        position: "absolute",
        animation: "marquee 20s linear infinite",
        '$:hover': {
            animationPlayState: "paused",
        },
    },
    orb: {

    },
    brandName: {
        objectFit: "contain",
    },
    span: {
        float: "left",
        width: "150%",
    },
}))
