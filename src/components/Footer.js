import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 60px 0 30px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  margin-bottom: 30px;
  min-width: 200px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;
  
  img {
    height: 60px;
  }
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 3px;
    background-color: #6A3DE8;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: #ccc;
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6A3DE8;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #ccc;
`;

const ContactIcon = styled.div`
  margin-right: 10px;
  color: #6A3DE8;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #444;
  color: #fff;
  margin-right: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #6A3DE8;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #444;
  color: #aaa;
  font-size: 14px;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <img src="/images/Logo-1.png" alt="M & C Seguros" />
          </FooterLogo>
          <p>Proteção e tranquilidade para você e sua família com as melhores opções de seguros do mercado.</p>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://wa.me/5544997036832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20M%20%26%20C%20Seguradora%2C%20
                              e%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o.%20Pode%20me%20ajudar%3F" 
                              target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Produtos</FooterTitle>
          <FooterLink to="/#auto" onClick={() => scrollToSection('auto')}>Seguro Automóvel</FooterLink>
          <FooterLink to="/#residencial" onClick={() => scrollToSection('residencial')}>Seguro Residencial</FooterLink>
          <FooterLink to="/#vida" onClick={() => scrollToSection('vida')}>Seguro de Vida</FooterLink>
          <FooterLink to="/#empresarial" onClick={() => scrollToSection('empresarial')}>Seguro Empresarial</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Links Úteis</FooterTitle>
          <FooterLink to="/sobre-nos">Sobre Nós</FooterLink>
          <FooterLink to="/#formulario" onClick={() => scrollToSection('formulario')}>Solicitar Cotação</FooterLink>
          <FooterLink to="/#contato" onClick={() => scrollToSection('contato')}>Contato</FooterLink>
          <FooterLink to="/privacidade">Política de Privacidade</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contato</FooterTitle>
          <ContactItem>
            <ContactIcon><FaPhone /></ContactIcon>
            <span>(44) 99703-6832</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FaWhatsapp /></ContactIcon>
            <span>(44) 99703-6832</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon><FaEnvelope /></ContactIcon>
            <span>Ana.manganoti@hotmail.com</span>
          </ContactItem>
          <p style={{ marginTop: '15px' }}>Horário de atendimento:<br />Segunda a Sexta, das 8h às 18h</p>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} M & C Seguros. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
