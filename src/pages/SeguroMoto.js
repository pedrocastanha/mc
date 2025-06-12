import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaMotorcycle, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroMoto = () => {
  const characteristics = [
    {
      icon: <FaMotorcycle />,
      title: "Moto Consciente",
      description: "Cobertura básica e econômica para sua motocicleta. Proteção essencial contra os principais riscos urbanos com preço que cabe no seu bolso."
    },
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Proteção total para sua moto com assistência 24h, guincho especializado, moto reserva e cobertura ampla contra acidentes e sinistros."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra roubo, furto e incêndio. Ideal para motociclistas que buscam segurança direcionada com excelente custo-benefício."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Moto"
      subtitle="Proteção especializada para motociclistas"
      backgroundImage="/images/Img_auto.png"
      infoTitle="Liberdade com proteção em cada quilômetro."
      infoDescription="PilotViver sobre duas rodas é sentir o vento no rosto e a emoção da liberdade — mas com segurança sempre em primeiro lugar. Com o Seguro Moto da M & C Seguros, sua motocicleta está protegida contra roubo, furto, colisões, panes, além de contar com assistência 24h e cobertura personalizada para o seu estilo de pilotagem.
        Viaje tranquilo, sabendo que você está resguardado por quem entende os desafios e as necessidades de quem vive sobre duas rodas."
      infoImage="/images/Img_auto.png"
      characteristics={characteristics}
      reverse={true}
    />
  );
};

export default SeguroMoto;

