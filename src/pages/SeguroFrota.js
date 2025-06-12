import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaTruck, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroFrota = () => {
  const characteristics = [
    {
      icon: <FaTruck />,
      title: "Frota Consciente",
      description: "Proteção básica para frotas empresariais. Cobertura essencial para múltiplos veículos com gestão simplificada e custos otimizados."
    },
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Cobertura ampla para frotas incluindo rastreamento, assistência 24h, veículos reserva e gestão completa de sinistros para toda a frota."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra roubo, furto e incêndio de veículos da frota. Ideal para empresas que buscam cobertura direcionada."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Frota"
      subtitle="Proteção completa para sua frota empresarial"
      backgroundImage="/images/Img_auto.png"
      infoTitle="Gestão inteligente da sua frota"
      infoDescription="Proteja todos os veículos da sua empresa com uma solução integrada e eficiente. Nosso seguro de frota oferece cobertura completa, gestão centralizada de sinistros e condições especiais para múltiplos veículos. Com assistência 24 horas e atendimento especializado, você mantém sua operação funcionando sem interrupções, garantindo a continuidade dos seus negócios."
      infoImage="/images/Img_auto.png"
      characteristics={characteristics}
      reverse={false}
    />
  );
};

export default SeguroFrota;

