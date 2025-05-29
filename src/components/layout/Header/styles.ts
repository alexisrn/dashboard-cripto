import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 0.4; }
`;

const bounceSubtle = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
`;

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  background-color: rgba(15, 23, 42, 0.5);
  border-bottom: 1px solid rgba(100, 116, 139, 0.25);
`;

export const InnerWrapper = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  padding: 1.5rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconWrapper = styled.div`
  position: relative;
  padding: 0.60rem;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, #3b82f6, #8b5cf6, #22c55e);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  animation: ${float} 4s ease-in-out infinite;

  .icon {
    height: 2rem;
    width: 2rem;
    color: white;
    position: relative;
    z-index: 10;
  }
`;

export const IconGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, #3b82f6, #8b5cf6, #22c55e);
  filter: blur(8px);
  opacity: 0.7;
  animation: ${pulseGlow} 3s ease-in-out infinite;
`;

export const TitleGroup = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  background: linear-gradient(to right, #3b82f6, #8b5cf6, #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;

  .zap-icon {
    height: 1rem;
    width: 1rem;
    color: #facc15;
    animation: ${bounceSubtle} 2s infinite;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #94a3b8;
  font-weight: 500;
  letter-spacing: 0.05em;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 20rem;
`;

export const SearchBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
  border-radius: 0.75rem;
  filter: blur(6px);
`;

export const SearchInner = styled.div`
  position: relative;

  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    height: 1.25rem;
    width: 1.25rem;
    color: #60a5fa;
  }

  .custom-input {
    padding: 0.75rem 1rem 0.75rem 3rem;
    background-color: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(71, 85, 105, 0.5);
    border-radius: 0.75rem;
    color: white;
    width: 100%;
    transition: border 0.3s;

    &:focus {
      border-color: rgba(96, 165, 250, 0.7);
      outline: none;
    }

    &::placeholder {
      color: #94a3b8;
    }
  }
`;

export const InputOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  background: linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  .custom-input:focus + & {
    opacity: 1;
  }
`;
