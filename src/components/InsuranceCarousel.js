import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CarouselTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  text-align: center;
  color: #333;
`;

const CarouselItem = styled.div`
  padding: 0 15px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const InsuranceImage = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 120px;
    max-height: 60px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(20%);
    transition: all 0.3s ease;
    
    &:hover {
      filter: grayscale(0%);
      transform: scale(1.05);
    }
  }
`;

const InsuranceCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const insuranceCompanies = [
    { name: 'Ezze' ,          logo: '/images/Logos/Logo_Ezze.png' },
    { name: 'HDI', logo: '/images/Logos/Logo_HDI.png' },
    { name: 'YELUM', logo: '/images/Logos/Logo_Yelum.png' },
    { name: 'Tokio Marine',  logo: '/images/Logos/Logo_Tokio.png' },
    { name: 'Allianz',       logo: '/images/Logos/Logo_Allianz.png' },
    { name: 'Porto Seguro',  logo: '/images/Logos/Logo_Porto.png' },
    { name: 'Sura',          logo: '/images/Logos/Logo_Sura.png' },
    { name: 'Azul Seguros',  logo: '/images/Logos/Logo_Azul.png' },
    { name: 'Bradesco',      logo: '/images/Logos/Logo_Bradesco.png' },
    { name: 'Zurich',        logo: '/images/Logos/Logo_Zurich.png' },
    { name: 'Mitsui',        logo: '/images/Logos/logo_mitsui.png' },
    { name: 'Metlife',        logo: '/images/Logos/Logo_Metlife.png' },
    { name: 'Mapfre',        logo: '/images/Logos/Logo_Mapfre-removebg-preview.png' },
    { name: 'Itau',        logo: '/images/Logos/Logo_Itau.png' },    
  ];

  return (
    <CarouselSection>
      <CarouselContainer>
        <CarouselTitle>Nossas Seguradoras Parceiras</CarouselTitle>
        <Slider {...settings}>
          {insuranceCompanies.map((company, index) => (
            <CarouselItem key={index}>
              <InsuranceImage>
                <img src={company.logo} alt={company.name} />
              </InsuranceImage>
            </CarouselItem>
          ))}
        </Slider>
      </CarouselContainer>
    </CarouselSection>
  );
};

export default InsuranceCarousel;
