import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Hero from '../components/Hero';
import InsuranceSection from '../components/InsuranceSection';
import ContactForm from '../components/ContactForm';
import InsuranceCarousel from '../components/InsuranceCarousel';

const HomeContainer = styled.div`
  padding-top: 80px; /* Para compensar o header fixo */
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  text-align: center;
  color: #333;
`;

const DirectContactSection = styled.section`
  background-color: #f5f5f5;
  padding: 60px 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const ContactDescription = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: ${props => props.primary ? '#6A3DE8' : '#25D366'};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    margin-right: 10px;
  }
`;

const ProductsSection = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      
      <ProductsSection id="produtos">
        <SectionTitle>Nossos Produtos</SectionTitle>
      
        <InsuranceSection 
          id="auto"
          title="Segurança que te acompanha aonde você for."
          description="Dirija com a tranquilidade de quem sabe que está protegido contra roubo, furto, colisões, pane e tudo mais que possa acontecer pelo caminho. Com nosso seguro auto, você conta com assistência 24 horas, carro reserva e um atendimento rápido e humano que resolve qualquer imprevisto enquanto você segue viagem.
           Faça a cotação em poucos cliques, escolha as coberturas que combinam com seu estilo e sinta a segurança de ter sempre alguém cuidando do seu carro, e de você."
          image="/images/Img_auto.png"
          color="#6A3DE8"
          reverse={false}
        />
        
        <InsuranceSection 
          id="residencial"
          title="Garanta a segurança do seu lar."
          description="Transforme sua casa num verdadeiro porto seguro. Com nosso seguro residencial, você dorme tranquilo sabendo que está protegido contra incêndio, roubo, danos elétricos e aqueles imprevistos que chegam sem avisar. Receba assistência 24 horas para qualquer tipo de emergências e conte com um atendimento humano e ágil sempre que precisar.
           Porque cuidar do seu lar é, acima de tudo, cuidar do que é mais importante para você.."
          image="/images/Img_residencia.png"
          color="#6A3DE8"
          reverse={true}
        />
        
        <InsuranceSection 
          id="vida"
          title="Proteja quem você ama."
          description="Cuidar de quem você ama pode ser tão simples quanto contratar nosso seguro de vida. Se algo inesperado acontecer, sua família recebe suporte financeiro imediato; enquanto isso, você já conta hoje com benefícios em vida, como cobertura para doenças graves e assistência funeral completa.
          Faça sua cotação e viva sabendo que o futuro de quem importa para você está realmente protegido."
          image="/images/Img_vida.png"
          color="#6A3DE8"
          reverse={false}
        />
        
        <InsuranceSection 
          id="empresarial"
          title="Proteja seu negócio e garanta seu futuro."
          description="Proteja o coração do seu negócio com um seguro empresarial que cuida do seu patrimônio, das suas operações e de quem faz tudo acontecer: seus colaboradores. Com coberturas contra incêndios, roubos, danos elétricos e responsabilidade civil, você evita prejuízos inesperados e garante que a empresa continue funcionando mesmo diante de imprevistos."
          image="/images/Img_empresarial.png" 
          color="#6A3DE8"
          reverse={true}
        />
      </ProductsSection>
      
      <InsuranceCarousel />
      
      <ContactForm id="formulario" />
      
      <DirectContactSection id="contato">
        <ContactContainer>
          <ContactTitle>Fale Conosco Diretamente</ContactTitle>
          <ContactDescription>
            Prefere um contato mais direto? Estamos à disposição para atender você pelos nossos canais de comunicação.
          </ContactDescription>
          <ContactButtons>
            <ContactButton href="tel:+5544997036832" primary>
              <FaPhone /> Ligar Agora
            </ContactButton>
            <ContactButton href="https://wa.me/5544997036832?text=Olá!%20Vim%20pelo%20site%20da%20M&C%20Corretora%20e%20gostaria%20de%20fazer%20uma%20cotação." target="_blank">
              <FaWhatsapp /> Conversar no WhatsApp
            </ContactButton>
          </ContactButtons>
        </ContactContainer>
      </DirectContactSection>
    </HomeContainer>
  );
};

export default Home;
