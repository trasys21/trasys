import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>새로운 문의가 도착했습니다: {name}님</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src={`https://www.trasys.net/images/logo.png`} // 로고 URL은 실제 운영 환경에 맞게 설정
            width="150"
            height="40"
            alt="Trasys Logo"
          />
        </Section>
        <Heading style={h1}>새로운 문의가 도착했습니다.</Heading>
        <Text style={text}>
          웹사이트 문의하기 폼을 통해 아래와 같은 내용이 접수되었습니다.
        </Text>
        <Section style={infoContainer}>
          <Text style={infoLabel}>
            <strong>성함:</strong> {name}
          </Text>
          <Text style={infoLabel}>
            <strong>이메일 (답장할 주소):</strong>{' '}
            <a href={`mailto:${email}`} style={infoLink}>{email}</a>
          </Text>
        </Section>
        <Hr style={hr} />
        <Section>
          <Heading as="h2" style={h2}>메시지 내용</Heading>
          <Text style={messageText}>
            {message.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          본 이메일은 Trasys 웹사이트 문의하기 폼을 통해 발송되었습니다.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

// Inline-CSS 스타일
const main = {
  backgroundColor: '#f0f2f5',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '640px', // Increased width
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const logoContainer = {
  padding: '20px 40px', // Added horizontal padding
  textAlign: 'center' as const,
};

const h1 = {
  color: '#1d232f',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
  padding: '0 40px', // Added horizontal padding
};

const h2 = {
  color: '#3c4354',
  fontSize: '18px',
  fontWeight: '600',
  margin: '20px 0 10px 0',
  padding: '0 40px', // Added horizontal padding
};

const text = {
  color: '#5a6479',
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'center' as const,
  padding: '0 40px', // Increased horizontal padding
};

const infoContainer = {
  backgroundColor: '#f8f9fa',
  padding: '20px 40px',
  margin: '20px 0', // Removed horizontal margin
  borderTop: '1px solid #e9ecef',
  borderBottom: '1px solid #e9ecef',
};

const infoLabel = {
  margin: '0 0 10px 0',
  color: '#3c4354',
  fontSize: '14px',
};

const infoLink = {
  color: '#2a68ff',
  textDecoration: 'underline',
};

const messageText = {
  color: '#3c4354',
  fontSize: '14px',
  lineHeight: '22px',
  whiteSpace: 'pre-wrap' as const,
  padding: '0 40px', // Added horizontal padding
};

const hr = {
  borderColor: '#e9ecef',
  margin: '20px 40px', // Added horizontal margin
};

const footer = {
  color: '#9aa5b9',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
  padding: '0 40px', // Added horizontal padding
};
