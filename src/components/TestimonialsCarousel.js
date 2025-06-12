import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = styled.section`
  padding: 80px 0;
  background-color: #F8F9FA;
`;

const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TestimonialsTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
  color: #5b32e6;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 20px;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #6C757D;
  margin-bottom: 30px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const AuthorName = styled.h4`
  font-size: 1.3rem;
  color: #5b32e6;
  margin: 0;
  font-weight: 600;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  color: #EB663B;
  font-size: 1.2rem;
`;

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  };

  const testimonials = [
    {
      name: "Juliana Rufine Raiocovitch",
      text: "Atendimento de excelente qualidade, uma empresa de confiança."
    },
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
    }
  ];

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsTitle>Avaliações</TestimonialsTitle>
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

