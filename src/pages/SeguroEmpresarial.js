import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaBuilding, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroEmpresarial = () => {
  const characteristics = [
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Cobertura ampla para empresas incluindo responsabilidade civil, equipamentos, perda de faturamento e proteção total do patrimônio empresarial."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra incêndio, roubo e furto do patrimônio empresarial. Ideal para proteger instalações e equipamentos com foco direcionado."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Empresarial"
      subtitle="Proteja seu negócio e garanta o futuro"
      backgroundImage="/images/Pages/BannerImages/Empresarial.jpg"
      infoTitle="Proteção sob medida para o seu negócio crescer com segurança."
      infoDescription="Seu empreendimento é fruto de esforço, visão e investimento — e merece estar protegido contra riscos que podem comprometer tudo isso. Nosso seguro empresarial cobre desde incêndios e roubos até danos elétricos, responsabilidade civil, perda de receita e muito mais. Com soluções personalizadas, atendimento ágil e assistência 24h, você cuida do que importa: o crescimento da sua empresa, com a tranquilidade de quem está bem protegido."
      infoImage="/images/Pages/Images/Empresarial.png"
      characteristics={characteristics}
      reverse={true}
    />
  );
};

export default SeguroEmpresarial;

