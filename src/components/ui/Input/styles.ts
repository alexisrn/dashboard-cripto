import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  height: 40px;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgba(100, 116, 139, 0.4);
  background-color: rgba(15, 23, 42, 0.7); /* fundo escuro com transparência */
  padding: 0.5rem 50px;
  font-size: 1rem;
  color: white;
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus-visible {
    outline: none;
    border-color: rgba(96, 165, 250, 0.8);
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* responsivo */
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;
