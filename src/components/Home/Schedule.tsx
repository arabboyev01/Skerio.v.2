import {Box} from "@material-ui/core";
import Title from "../../ReusiableComponents/Titel/Titel";
import useStyles from "./schedule.style";
import {data} from "./data";
import Image from "next/image";
import {Button, Typography} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
export default function Schedule(){

    const classes = useStyles();

    return(
        <Box className={classes.scheduleWrapper}>
            <Title header={"Match Schedule"}/>
            <Swiper
                modules={[ Keyboard, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                keyboard={{
                    enabled: true,
                }}
                className={classes.swiper}
                breakpoints={{
                    600: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    900: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                }}
            >
                {data.map(item =>
                <SwiperSlide className={classes.singleMatch} key={item.name1}>
                    <Box className={classes.matchHeader}>
                        <Box>
                            <Image className={classes.firstImage} src={item.firstClubLogo}  width={80} height={80}/>
                            <Image className={classes.secondImage} src={item.secondClubLogo}  width={80} height={80}/>
                        </Box>
                        <Box className={classes.times}>
                            <Typography>{item.date}</Typography>
                            <Typography>{item.hour}</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.redLine}></Box>
                    <Box className={classes.matchTitle}>
                        <Typography className={classes.title}>{item.name1}</Typography>
                        <Typography className={classes.titleConnecter}>VS</Typography>
                        <Typography className={classes.title}>{item.name2}</Typography>
                    </Box>
                    <Box className={classes.description}>
                        <Typography className={classes.desc}>{item.description}</Typography>
                        <Button className={classes.moreSee}>See more</Button>
                    </Box>
                </SwiperSlide>
                )}
            </Swiper>
        </Box>
    )
}
