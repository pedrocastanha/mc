import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaHeart, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroVidaIndividual = () => {
  const characteristics = [
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Cobertura ampla incluindo doenças graves, assistência funeral, renda por incapacidade e benefícios em vida para total proteção familiar."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra acidentes pessoais decorrentes de sinistros. Cobertura direcionada para situações de emergência e acidentes."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Vida Individual"
      subtitle="Proteja quem você ama"
      backgroundImage="/images/Img_vida.png"
      infoTitle="Cuidar de você é proteger quem você ama."
      infoDescription="O Seguro de Vida vai além da proteção financeira: ele representa cuidado, tranquilidade e segurança para quem depende de você. Com coberturas que amparam casos de falecimento, invalidez ou doenças graves, você garante suporte em momentos difíceis e preserva o bem-estar da sua família. Mais do que um seguro, é um gesto de amor. Escolha o plano ideal para o seu momento de vida e viva com a serenidade de quem sabe que está amparado."
      infoImage="/images/Img_vida.png"
      characteristics={characteristics}
      reverse={false}
    />
  );
};

export default SeguroVidaIndividual;

