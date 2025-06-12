import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaCar, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroAutomoveis = () => {
  const characteristics = [
    {
      icon: <FaCar />,
      title: "Auto Consciente",
      description: "Cobertura essencial com preço acessível. Protege contra os principais riscos do dia a dia, oferecendo tranquilidade sem comprometer o orçamento."
    },
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Cobertura ampla com diversos benefícios. Inclui assistência 24h, carro reserva, proteção contra roubo, furto, colisão e muito mais."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra sinistros de roubo, furto e incêndio. Ideal para quem busca cobertura direcionada com excelente custo-benefício."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Automóveis"
      subtitle="Proteção completa para o seu veículo"
      backgroundImage="/images/Img_auto.png"
      infoTitle="Proteção completa para quem vive em movimento."
      infoDescription="Viaje com a certeza de estar sempre amparado.
      Nosso seguro auto protege seu veículo contra roubo, furto, colisões, panes e muitos outros imprevistos do dia a dia. Com cobertura personalizada, assistência 24h, carro reserva e um atendimento ágil e humano, você dirige com tranquilidade em qualquer trajeto. Faça a cotação online, escolha as coberturas que combinam com seu estilo de vida e tenha a segurança de estar sempre acompanhado de quem entende de proteção."
      infoImage="/images/Img_auto.png"
      characteristics={characteristics}
      reverse={false}
    />
  );
};

export default SeguroAutomoveis;

