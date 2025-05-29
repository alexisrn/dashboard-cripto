import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const TableWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  border-radius: 16px;
  overflow-x: auto;
 position: sticky;
  top: 0;
  backdrop-filter: blur(16px);
  background-color: rgba(15, 23, 42, 0.5);
  border-bottom: 1px solid rgba(100, 116, 139, 0.25);
  border: 1px solid rgba(139, 92, 246, 0.2);
  backdrop-filter: blur(4px);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #f1f1f1;
  font-size: 0.95rem;

  thead {
    background: rgba(139, 92, 246, 0.1);
    backdrop-filter: blur(4px);
    
    th {
      padding: 14px;
      text-align: left;
      font-weight: 700;
      color: #c084fc;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  tbody {
    tr {
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      transition: background 0.2s ease;

      &:hover {
        background-color: rgba(139, 92, 246, 0.05);
      }

      td {
        padding: 14px;
        vertical-align: middle;
      }
    }
  }
`;

export const CoinName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  img {
    width: 28px;
    height: 28px;
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.2));
  }

  span {
    font-weight: 600;
    color: #f8fafc;
  }

  small {
    color: #94a3b8;
    font-size: 0.75rem;
    margin-top: 2px;
  }
`;

export const PriceChange = styled.td<{ change: number }>`
  color: ${({ change }) => 
    change > 0 ? '#4ade80' : change < 0 ? '#f87171' : '#cbd5e1'};
  font-weight: 600;
  font-size: 0.9rem;
`;
