import {Box} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "../../components/Shop/shopping.style";

export default function  CarouselComponent({data}: any){

    const classes = useStyles()
    return(
        <Carousel>
            {data.map((item: any, index:number) =>
                <Box className={classes.shopSingleItem} key={index} style={{backgroundImage: `url(${item.images.src})`}}></Box>
            )}
        </Carousel>
    )
}
