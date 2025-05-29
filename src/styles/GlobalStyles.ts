// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    position: relative;
    color: #ffffff;
    background: radial-gradient(ellipse at top, #0f0f23 0%, #020617 50%, #000000 100%);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Grade tecnológica */
  .tech-grid {
    background-image: 
      linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  /* Efeito holográfico */
  .holographic {
    background: linear-gradient(135deg, 
      rgba(59, 130, 246, 0.2) 0%, 
      rgba(168, 85, 247, 0.2) 25%, 
      rgba(34, 197, 94, 0.2) 50%, 
      rgba(251, 191, 36, 0.2) 75%, 
      rgba(239, 68, 68, 0.2) 100%
    );
    background-size: 400% 400%;
    animation: holographic-shift 4s ease infinite;
  }

  @keyframes holographic-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default GlobalStyle;
