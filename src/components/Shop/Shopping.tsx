import useStyles from "./shopping.style";
import {Box} from "@material-ui/core";
import Carousel from 'react-material-ui-carousel'
import {dataDump} from "./dumpData";
import Image from "next/image";
import StoreCart from "../../ReusiableComponents/StoreCart/StoreCart";
import {data} from "../Home/Store/data";
import Title from "../../ReusiableComponents/Titel/Titel";
import FilterButtons from "../../ReusiableComponents/FilterButtons/FilterButtons";

export default function Shopping(){
    const classes = useStyles();

    return(
        <Box className={classes.mainShopWrapper}>
              <Carousel>
                  {dataDump.map((item: any, index:number) =>
                      <Box className={classes.shopSingleItem} key={index} style={{backgroundImage: `url(${item.images.src})`}}></Box>
                  )}
              </Carousel>
            <FilterButtons />
              <Box>
                <Title header="T-shirts" />
                <StoreCart data={data}/>
              </Box>
        </Box>
    )
}
