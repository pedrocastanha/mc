import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';

const FormSection = styled.section`
  padding: 80px 0;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

const FormSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #6A3DE8;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 15px;
  
  &:focus {
    border-color: #6A3DE8;
    outline: none;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #666;
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  padding: 15px;
  background-color: #6A3DE8;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #5a33c7;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    margin-right: 10px;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactForm = ({ id }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'Automóvel',
    consent: false
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.phone || !formData.consent) {
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Por favor, preencha todos os campos e aceite os termos.'
    });
    return;
  }

  setLoading(true);

  const templateParams = {
    to_email: process.env.REACT_APP_RECEIVE_EMAIL,
    subject: 'Novo Cliente Cadastrado',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    product: formData.product
  };

  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY  
    )
    .then(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Formulário enviado com sucesso! Entraremos em contato em breve.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: 'Automóvel',
        consent: false
      });
    })
    .catch((err) => {
      console.error('Erro ao enviar e-mail:', err);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Ops! Não foi possível enviar. Tente novamente mais tarde.'
      });
    })
    .finally(() => setLoading(false));
};
  
  return (
    <FormSection id={id}>
      <FormContainer>
        <FormTitle>Solicite uma Cotação</FormTitle>
        <FormSubtitle>Preencha o formulário abaixo e entraremos em contato com você.</FormSubtitle>
        
        {formStatus.submitted && (
          formStatus.success ? (
            <SuccessMessage>{formStatus.message}</SuccessMessage>
          ) : (
            <ErrorMessage>{formStatus.message}</ErrorMessage>
          )
        )}
        
        <Form ref={form} onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nome Completo</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Digite seu nome completo"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Digite seu e-mail"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="phone">Telefone</Label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="(00) 00000-0000"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="product">Produto de Interesse</Label>
            <Select 
              id="product" 
              name="product" 
              value={formData.product} 
              onChange={handleChange}
            >
              <option value="Automóvel">Seguro Automóvel</option>
              <option value="Residencial">Seguro Residencial</option>
              <option value="Vida">Seguro de Vida</option>
              <option value="Empresarial">Seguro Empresarial</option>
            </Select>
          </FormGroup>
          
          <FormGroup fullWidth>
            <CheckboxContainer>
              <Checkbox 
                type="checkbox" 
                id="consent" 
                name="consent" 
                checked={formData.consent} 
                onChange={handleChange}
              />
              <CheckboxLabel htmlFor="consent">
                Concordo com a política de privacidade e autorizo o contato da M & C Seguros.
              </CheckboxLabel>
            </CheckboxContainer>
          </FormGroup>
          
          <SubmitButton type="submit" disabled={loading}>
            <FaPaperPlane /> {loading ? 'Enviando...' : 'Solicitar Cotação'}
          </SubmitButton>
        </Form>
      </FormContainer>
    </FormSection>
  );
};

export default ContactForm;
