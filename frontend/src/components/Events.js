import React, { useState, useEffect } from 'react';
import '../App.css';
import './Events.css';
import Slider from "react-slick";
import ReactPlayer from 'react-player'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });
  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };

  const slidesData = [
    {
      id: 1,
      title: '2019 Benefit Concert',
      label: 'Fundraising total: $3000 Beneficiary: Lucile Packard Children’s Hospital',
      type: 'image'
    }, {
      id: 2,
      title: '2018 Benefit Concert',
      label: 'Fundraising total: $3000 Beneficiary: Guiding Light Project (www.guidinglightproject.com)',
      type: 'image'
    }, {
      id: 3,
      title: '2017 Benefit Concert',
      label: '',
      type: 'image'
    }, {
      id: 4,
      title: '2016 Benefit Concert',
      label: '',
      type: 'image'
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  return (

    <div className="App">
      <div className='container event-header'>
        <h1>Annual Concerts</h1>
      </div>
      <div className="video--slider">
        {/* <h2> Single Item</h2> */}
        <Slider {...videoSettings}>
          <div className="slick-slide">
            {/* <h3>1</h3> */}
            <ReactPlayer url='https://www.youtube.com/watch?v=eRXU1n_S7RI' />
          </div>
          <div className="slick-slide">
            {/* <h3>2</h3> */}
            <ReactPlayer url='https://www.youtube.com/watch?v=_Yzhougjyfw' />
          </div>
          <div className="slick-slide">
            {/* <h3>3</h3> */}
            <ReactPlayer url='https://www.youtube.com/watch?v=EIsfmtmYD0I' />
          </div>
        </Slider>
      </div>
      {/* <div className='container event-header'>
        <h1>Events</h1>
      </div> */}
      <br></br>
      <br></br>
      <div className="slider-wrapper">

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >
          {slidesData.map((slide) =>
            <div className="event--container">
              <div className="slick-slide" key={slide.id}>
                {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
                <h2 className="event-header-dynamic">{slide.title}</h2>
                <img className="slick-slide-image event-img" src={`/images/events/IMG_${slide.id}.jpg`} />
                {/* {slide.type == "video"
                  ? <ReactPlayer url={slide.link} />
                  : <img className="slick-slide-image event-img" src={`/images/events/IMG_${slide.id}.jpg`} />
                } */}
                <label className="slick-slide-label">{slide.label}</label>
              </div>
            </div>

          )}

        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData.map((slide) =>

              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image" src={`/images/events/IMG_${slide.id}.jpg`} />
              </div>

            )}

          </Slider>
        </div>
      </div>

    </div>
  );
}

export default App;