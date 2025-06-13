import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaUsers, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroVidaGrupo = () => {
  const characteristics = [
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Cobertura ampla para grupos incluindo invalidez, doenças graves, assistência médica e benefícios estendidos para todos os participantes."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra acidentes coletivos e sinistros. Cobertura direcionada para situações de emergência que afetam o grupo."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Vida em Grupo"
      subtitle="Proteção coletiva para sua equipe"
      backgroundImage="/images/Img_vida.png"
      infoTitle="Valorização e proteção para quem faz sua empresa acontecer."
      infoDescription="Oferecer um Seguro de Vida em Grupo é mais do que um benefício: é um diferencial competitivo que demonstra cuidado real com os colaboradores. Com coberturas para acidentes, invalidez, falecimento e assistência funeral, sua empresa garante amparo às famílias e fortalece o vínculo com a equipe. Planos flexíveis, ajustáveis ao porte e à realidade do seu negócio. Proteja seu time, valorize seu capital humano."
      infoImage="/images/Img_vida.png"
      characteristics={characteristics}
      reverse={true}
    />
  );
};

export default SeguroVidaGrupo;

