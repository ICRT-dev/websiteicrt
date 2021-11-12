import React, {useState} from "react";
import Slider from "react-slick";
import MembersCard from "../cards/MembersCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const MembersSlider = () => {
    const NextArrow = ({ onClick }) => {
        return (
        <div className="absolute items-center dark:text-white z-10 right-0 top-1/2 dark:hover:text-blue-500 hover:text-blue-500 duration-300" onClick={onClick}>
            <FaArrowRight />
        </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
        <div className="absolute items-center dark:text-white z-10 left-0 top-1/2  dark:hover:text-blue-500 hover:text-blue-500 duration-300" onClick={onClick}>
            <FaArrowLeft />
        </div>
        );
    };

    const [cardIndex, setCardIndex] = useState(0);

    const settings = {
        centerMode: true,
        infinite: true,
        lazyload: true,
        centerPadding: 0,
        speed: 500,
        slidesToShow: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setCardIndex(next),
    };
    return (
      <div>
        <Slider {...settings}>
          <div align="center">
            <MembersCard name="Michella" jabatan="Ketua ICRT" />
          </div>
          <div align="center">
            <MembersCard name="Christinna" jabatan="Wakil Ketua ICRT" />
          </div>
          <div align="center">
            <MembersCard name="Alliyah" jabatan="Sekretaris" />
          </div>
          <div align="center">
            <MembersCard name="Alliyah" jabatan="Sekretaris" />
          </div>
        </Slider>
      </div>
    );
}

export default MembersSlider;