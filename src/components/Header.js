import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  img {
    height: 30px;
    width: auto;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #6A3DE8;
  }
`;

const CotacaoButton = styled(Link)`
  background-color: #6A3DE8;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-left: 15px;

  &:hover {
    background-color: #5a33c7;
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src="/images/Logo-2a.png" alt="M & C Seguros" />
          </Link>
        </Logo>
        <NavLinks>
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
          <NavLink to="/#produtos" onClick={() => scrollToSection('produtos')}>Produtos</NavLink>
          <NavLink to="/sobre-nos">Sobre Nós</NavLink>
          <NavLink to="/#contato" onClick={() => scrollToSection('contato')}>Contato</NavLink>
          <CotacaoButton to="/#formulario" onClick={() => scrollToSection('formulario')}>Faça uma cotação</CotacaoButton>
        </NavLinks>
        <MobileMenuButton>
          <span>☰</span>
        </MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
