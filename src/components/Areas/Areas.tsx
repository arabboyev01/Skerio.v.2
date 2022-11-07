import {Box} from "@material-ui/core";
import useStyles from "./areas.style"
import CarouselComponent from "../../ReusiableComponents/Carousel/Carousel";
import {dataDump} from "../Shop/dumpData";
import FilterButtons from "../../ReusiableComponents/FilterButtons/FilterButtons";
import {areasDumbData} from "./areas.data";
import {Typography} from "@mui/material";
import Image from "next/image";

export default function Areas(){

    const classes = useStyles();
    return(
        <Box className={classes.mainAreaWrapper}>
            <Box>
                <CarouselComponent data={areasDumbData}/>
                <FilterButtons />
            </Box>
            <Box className={classes.areaWrapper}>
                {areasDumbData.map((item, index) =>
                    <Box className={classes.singleAreaCart} key={index}>
                        <Box className={classes.areaCartImages} style={{backgroundImage: `url(${item.images.src})`}}></Box>
                        <Box className={classes.areaCartDesc}>
                            <Typography className={classes.areaCartTitle}>{item.name}</Typography>
                            <Box className={classes.cartDesc}>
                                <Box className={classes.cartLeft}>
                                    <Box className={classes.row}>
                                      <Typography className={classes.icon}><Image src={item.priceIcon} className={classes.iconImages}/></Typography>
                                      <Typography className={classes.text}>{item.prices}</Typography>
                                    </Box>
                                    <Box className={classes.row}>
                                        <Typography className={classes.icon}><Image src={item.phoneIcon} className={classes.iconImages}/></Typography>
                                        <Typography className={classes.text}>{item.phone}</Typography>
                                    </Box>
                                    <Box className={classes.row}>
                                        <Typography className={classes.icon}><Image src={item.adressIcon} className={classes.iconImages}/></Typography>
                                        <Typography className={classes.text}>{item.adress}</Typography>
                                    </Box>
                                </Box>
                                <Box className={classes.cartRight}>
                                    <Box className={classes.row}>
                                        <Typography className={classes.icon}><Image src={item.dressRoomIcon} className={classes.iconImages}/></Typography>
                                        <Typography className={classes.text}>{item.dressRoom}</Typography>
                                    </Box>
                                    <Box className={classes.row}>
                                        <Typography className={classes.icon}><Image src={item.foodsIcon} className={classes.iconImages}/></Typography>
                                        <Typography className={classes.text}>{item.foods}</Typography>
                                    </Box>
                                    <Box className={classes.row}>
                                        <Typography className={classes.icon}><Image src={item.bathroomIcon} className={classes.iconImages}/></Typography>
                                        <Typography className={classes.text}>{item.bathRoom}</Typography>
                                    </Box>
                                    <Box className={classes.row}>
                                        <Typography className={classes.icon}><Image src={item.placesIcon} className={classes.iconImages}/></Typography>
                                        <Typography className={classes.text}>{item.places}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}
