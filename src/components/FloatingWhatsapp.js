import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp, FaTimes, FaPhone } from 'react-icons/fa';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const WhatsappContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }
`;

const WhatsappButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  font-size: 28px;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  position: relative;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
    animation: ${bounce} 0.6s ease-in-out;
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #25D366, #128C7E, #25D366);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    animation: ${pulse} 1s infinite;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 24px;
  }
`;

const ChatBubble = styled.div`
  background: white;
  border-radius: 20px;
  padding: 15px 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  max-width: 280px;
  position: relative;
  animation: ${props => props.isVisible ? slideIn : slideOut} 0.3s ease-out;
  border: 1px solid #e0e0e0;
  backdrop-filter: blur(10px);

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
  }

  @media (max-width: 768px) {
    max-width: 250px;
    padding: 12px 16px;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ChatTitle = styled.h4`
  margin: 0;
  color: #333;
  font-size: 16px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 14px;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    color: #666;
    background: #f5f5f5;
  }
`;

const ChatMessage = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.4;
`;

const ChatButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const ChatButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${props => props.primary ? 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' : 'linear-gradient(135deg, #EB663B 0%, #D55A2F 100%)'};
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  flex: 1;
  justify-content: center;
  min-width: 100px;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  }
`;

const OnlineIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;

const OnlineDot = styled.div`
  width: 8px;
  height: 8px;
  background: #25D366;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;

const OnlineText = styled.span`
  color: #25D366;
  font-size: 12px;
  font-weight: 500;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  animation: ${bounce} 2s infinite;
`;

const FloatingWhatsapp = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
      setIsVisible(true);
      setShowNotification(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseBubble = () => {
    setIsVisible(false);
    setTimeout(() => setShowBubble(false), 300);
  };

  const handleButtonClick = () => {
    setShowNotification(false);
  };

  const whatsappUrl = "https://wa.me/5544997036832?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20M%26C%20Seguros%20e%20gostaria%20de%20fazer%20uma%20cotação.%20Pode%20me%20ajudar%3F";
  const phoneUrl = "tel:+5544997036832";

  return (
    <WhatsappContainer>
      {showBubble && (
        <ChatBubble isVisible={isVisible}>
          <ChatHeader>
            <ChatTitle>M&C Seguros</ChatTitle>
            <CloseButton onClick={handleCloseBubble}>
              <FaTimes />
            </CloseButton>
          </ChatHeader>
          <OnlineIndicator>
            <OnlineDot />
            <OnlineText>Online agora</OnlineText>
          </OnlineIndicator>
          <ChatMessage>
            Olá! 👋 Precisa de ajuda com seguros? Estamos aqui para te atender!
          </ChatMessage>
          <ChatButtons>
            <ChatButton 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              primary
              onClick={handleButtonClick}
            >
              <FaWhatsapp />
              WhatsApp
            </ChatButton>
            <ChatButton 
              href={phoneUrl}
              onClick={handleButtonClick}
            >
              <FaPhone />
              Ligar
            </ChatButton>
          </ChatButtons>
        </ChatBubble>
      )}
      <WhatsappButton 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        title="Fale conosco no WhatsApp"
        onClick={handleButtonClick}
      >
        <FaWhatsapp />
        {showNotification && <NotificationBadge>1</NotificationBadge>}
      </WhatsappButton>
    </WhatsappContainer>
  );
};

export default FloatingWhatsapp;

