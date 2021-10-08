import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import dataForMsg from "./messagesObjects";
import Messages from "./Messages";
import "swiper/swiper-bundle.min.css";
import "./mainMessages.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Autoplay, Navigation]);

const MainMessages = () => {
  return (
    <div className="Msg-page">
      <div className="MsgBoxContainer">
        <h1>
          <i>WORDS OF OUR FOUNDERS.</i>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          itaque ipsa nam quam obcaecati nostrum eos modi quia ipsam, dolor
          possimus amet architecto error? Accusamus porro iste quo itaque
          accusantium.{" "}
        </p>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 100,
            },

            524: { slidesPerView: 1, spaceBetween: 0 },

            610: {
              slidesPerView: 2,
              spaceBetween: 0,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },

            832: {
              slidesPerView: 2,
              spaceBetween: 0,
              loopFillGroupWithBlank: true,
            },

            856: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            1305: {
              slidesPerView: 3,
              spaceBetween: 30,
            },

            1654: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="MsgCarousel"
        >
          {dataForMsg.map((user) => {
            return (
              <SwiperSlide className="SliderMsg" key={user.id}>
                <Messages
                  imageUrl={user.ImageUrl}
                  user={user.user}
                  content={user.msg}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MainMessages;
