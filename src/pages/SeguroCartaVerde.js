import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaGlobe, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroCartaVerde = () => {
  const characteristics = [
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Cobertura ampla para viagens internacionais incluindo assistência 24h, guincho internacional e proteção completa em território estrangeiro."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra roubo, furto e incêndio durante viagens internacionais. Cobertura direcionada para sinistros em território estrangeiro."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Carta Verde"
      subtitle="Viaje pelo Mercosul com segurança"
      backgroundImage="/images/Pages/BannerImages/CartaVerde.jpg"
      infoTitle="Viaje tranquilo pelo Mercosul com a proteção que você precisa."
      infoDescription="Vai cruzar fronteiras com seu carro? O Seguro Carta Verde é obrigatório para quem vai viajar com veículo próprio para países do Mercosul, como Argentina, Uruguai, Paraguai e outros. Ele garante cobertura contra danos materiais e corporais causados a terceiros, protegendo você legal e financeiramente durante sua viagem.
        Com a M & C Seguros, você contrata de forma rápida, com atendimento humanizado, valores acessíveis e toda a orientação necessária para seguir viagem com segurança e tranquilidade.
        Cruze fronteiras com confiança.
        Solicite agora seu Seguro Carta Verde e evite imprevistos em sua viagem internacional."
      infoImage="/images/Pages/Images/CartaVerde.png"
      characteristics={characteristics}
      reverse={false}
    />
  );
};

export default SeguroCartaVerde;

