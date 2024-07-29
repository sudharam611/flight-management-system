import React from "react";
import DateCard from "./DateCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function DateSwiper({
  days,
  navigationNextRef,
  navigationPrevRef,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <>
      <Swiper
        breakpoints={{
          550: {
            slidesPerView: 4,
          },
          800: {
            slidesPerView: 6,
          },

          1024: {
            slidesPerView: 7,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        spaceBetween={10}
        slidesPerView={3}
        className="swiper-container "
      >
        {days.map((day, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            {day.date === selectedDate ? (
              <DateCard
                date={day.date}
                day={day.dayName}
                active
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            ) : (
              <DateCard
                date={day.date}
                day={day.dayName}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default DateSwiper;
