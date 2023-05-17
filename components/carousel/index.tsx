import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows';
import Slide from './Slide';
import { ISlide } from '@/redux/features/slides/service/slides.api';
const Carousel = ({ slides }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: <NextArrow to="next" />,
    prevArrow: <PrevArrow to="prev" />,
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide: ISlide) => {
          return <Slide key={slide.id} {...slide} />;
        })}
      </Slider>
      <>
        <div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <HiOutlineChevronRight />
        </div>
        <div className="absolute top-1/2 left-4  md:left-3 lg:left-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <HiOutlineChevronLeft />
        </div>
      </>
    </div>
  );
};

export default Carousel;
