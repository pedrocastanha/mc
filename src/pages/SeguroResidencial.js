import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaHome, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroResidencial = () => {
  const characteristics = [
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Cobertura ampla para sua residência incluindo danos elétricos, responsabilidade civil, assistência 24h e proteção total do patrimônio familiar."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra incêndio e roubo. Cobertura direcionada para os principais riscos residenciais com excelente relação custo-benefício."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Residencial"
      subtitle="Proteja o que é mais importante para você"
      backgroundImage="/images/Img_residencial.png"
      infoTitle="Sua casa protegida, sua paz garantida."
      infoDescription="Mais do que um teto, sua casa é um lar. Com nosso seguro residencial, você protege seu lar contra incêndios, roubos, danos elétricos e outros imprevistos que ninguém espera — mas que podem acontecer. Tenha acesso a assistência 24h para emergências e conte com um atendimento ágil e próximo sempre que precisar. Porque cuidar do seu lar é cuidar da sua história, do seu conforto e de quem você ama."
      infoImage="/images/Img_residencial.png"
      characteristics={characteristics}
      reverse={false}
    />
  );
};

export default SeguroResidencial;

