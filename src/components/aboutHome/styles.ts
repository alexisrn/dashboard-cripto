import styled, { keyframes } from 'styled-components';

const bounceSubtle = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

export const SectionWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  margin-top: 3rem;
`;

export const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem; 
  font-weight: bold;
  margin-bottom: 1rem;

  span.text-gradient {
    background: linear-gradient(to right, #60a5fa, #a78bfa, #34d399); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const IconBadge = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;

  svg {
    height: 2rem;
    width: 2rem;
    color: #60a5fa; 
    animation: ${bounceSubtle} 2s infinite;
  }
`;

export const Description = styled.p`
  color: #94a3b8;
  font-size: 1.125rem; 
  max-width: 42rem; 
  margin: 0 auto;
  line-height: 1.75rem; 
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; 
  margin-top: 1rem;
`;

export const PulseDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #34d399; 
  border-radius: 9999px;
  animation: ${pulse} 1.5s infinite;
`;

export const RealTimeText = styled.span`
  color: #34d399;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
`;
