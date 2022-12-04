import useStyles from "./ground.style";
import {Box} from "@material-ui/core";
import Title from "../../../ReusiableComponents/Titel/Titel";
import {A11y, Keyboard, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import {data} from "./data";
import {Button, Typography} from "@mui/material";
import "swiper/css";
import Image from "next/image";

export default function Grounds(){
    const classes = useStyles();
    return(
        <Box className={classes.groundWrapper}>
            <Title header="Sports Grounds" />
            <Box className={classes.groundMain}>
                <Swiper modules={[Autoplay, Keyboard, A11y]} slidesPerView={1} pagination={{ clickable: false }} scrollbar={{ draggable: true }}
                    keyboard={{
                        enabled: true,
                    }} className={classes.swiper}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }} centeredSlides={true}>
                    {data.map(item =>
                        <SwiperSlide key={item.name}>
                            <Box className={classes.groundSingle} >
                                <Box className={classes.singleDesc}>
                                    <Typography className={classes.groundName}>{item.name}</Typography>
                                    <Typography className={classes.groundAdress}>{item.adress}</Typography>
                                    <Button className={classes.moreSee}>See more</Button>
                                </Box>
                                <Box className={classes.singleImage}>
                                    <Image src={item.image} alt="image" />
                                </Box>
                            </Box>
                        </SwiperSlide>
                    )}
                </Swiper>
            </Box>
        </Box>
    )
}
