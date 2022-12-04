import {useState} from "react";
import useStyles from "./storeCart.style"
import {Box} from "@material-ui/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Keyboard, Pagination, Scrollbar} from "swiper";
import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import 'swiper/css/pagination';
import {Typography} from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function StoreCart({data} : any){
    const classes = useStyles();
    const [like, setLike] = useState(false);

    const handleChangeLikeIcon = function() {
        setLike(!like)
    }

    return(
        <Box className={classes.storeWrapper}>
            <Swiper
                modules={[ Keyboard, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                keyboard={{
                    enabled: true,
                }}
                className={classes.swiper}
                breakpoints={{
                    540: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    700: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    1100: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                }}
            >
                {data.map((item: any) =>
                    <SwiperSlide key={item.name}>
                        <Box className={classes.singleCart}>
                        <Box className={classes.cartHeader}>
                            <Image src={item.Icon}  width={32} height={32} alt="image"/>
                            <Box>
                                {like ? <FavoriteIcon onClick={handleChangeLikeIcon} className={classes.likeTrue}/> : <FavoriteBorderIcon onClick={handleChangeLikeIcon} className={classes.likeFalse}/>}
                            </Box>
                        </Box>
                        <Box className={classes.bodyImage}>
                            <Image src={item.image}  width={204} height={255} alt="image" className={classes.cartImage}/>
                        </Box>
                        <Box className={classes.cartFooter}>
                            <Box>
                                <Typography className={classes.price}>{item.name}</Typography>
                                <Typography className={classes.price}>{item.price}</Typography>
                            </Box>
                            <LocalGroceryStoreIcon className={classes.cart}/>
                        </Box>
                        </Box>
                    </SwiperSlide>
                )}
            </Swiper>
        </Box>
    )
}
