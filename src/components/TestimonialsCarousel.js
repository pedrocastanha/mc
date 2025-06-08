import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = styled.section`
  padding: 60px 0;
  background-color: #f5f5f5;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TestimonialsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  text-align: center;
  color: #333;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin: 0 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  margin-top: auto;
`;

const AuthorName = styled.h4`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  color: #FFD700;
`;

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Maria Silva",
      text: "A melhor seguradora de Maringá! Sempre me atendem muito rápido, com preços justos e que condizem com a qualidade do seguro."
    },
    {
      name: "João Santos",
      text: "Sou do Mato Grosso, e tenho seguro com a M & C, nunca me faltou suporte! Atendimento excepcional e sempre disponíveis."
    },
    {
      name: "Ana Costa",
      text: "Profissionais extremamente competentes e atenciosos. Meu seguro residencial foi resolvido em poucos dias com toda a assistência necessária."
    },
    {
      name: "Carlos Oliveira",
      text: "Já sou cliente há mais de 5 anos e nunca tive problemas. Quando precisei acionar o seguro do meu carro, tudo foi resolvido rapidamente."
    },
    {
      name: "Fernanda Lima",
      text: "Recomendo de olhos fechados! A equipe da M & C é muito profissional e sempre encontra as melhores opções para cada necessidade."
    },
    {
      name: "Roberto Mendes",
      text: "Excelente atendimento e preços competitivos. Minha empresa está protegida com o seguro empresarial deles há 3 anos."
    },
    {
      name: "Juliana Pereira",
      text: "Atendimento humanizado e personalizado. Eles realmente se preocupam em encontrar a melhor solução para cada cliente."
    }
  ];

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsTitle>O que nossos clientes dizem</TestimonialsTitle>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <TestimonialAuthor>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <StarsContainer>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </StarsContainer>
                </TestimonialAuthor>
              </TestimonialCard>
            </div>
          ))}
        </Slider>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default TestimonialsCarousel;

