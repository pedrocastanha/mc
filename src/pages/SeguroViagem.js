import React from 'react';
import InsurancePageLayout from '../components/InsurancePageLayout';
import { FaPlane, FaShieldAlt, FaFire } from 'react-icons/fa';

const SeguroViagem = () => {
  const characteristics = [
    {
      icon: <FaShieldAlt />,
      title: "Seguro Completo",
      description: "Cobertura ampla incluindo despesas médicas, cancelamento de viagem, bagagem extraviada e assistência 24h em qualquer lugar do mundo."
    },
    {
      icon: <FaFire />,
      title: "Contra Roubo e Incêndio",
      description: "Proteção específica contra roubo e furto durante a viagem. Cobertura direcionada para bagagens e pertences pessoais em trânsito."
    }
  ];

  return (
    <InsurancePageLayout
      title="Seguro Viagem"
      subtitle="Viaje com tranquilidade e segurança"
      backgroundImage="/images/Img_vida.png"
      infoTitle="Viaje leve, viaje seguro."
      infoDescription="Aproveite cada momento da sua viagem com a segurança de quem está amparado em qualquer lugar do mundo. Nosso seguro de viagem cobre imprevistos como extravio de bagagem, despesas médicas, cancelamento de voos, acidentes e muito mais. Ideal para lazer, trabalho, intercâmbio ou estudos. Com cobertura nacional e internacional, você embarca com mais tranquilidade e volta apenas com boas histórias."
      infoImage="/images/Img_vida.png"
      characteristics={characteristics}
      reverse={true}
    />
  );
};

export default SeguroViagem;

