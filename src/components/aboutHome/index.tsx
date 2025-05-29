import * as S from './styles';
import { TrendingUp } from 'lucide-react';

export const AboutHome = () => {
  return (
    <S.SectionWrapper>
      <S.TitleContainer>
        <S.SectionTitle>
          Principais <span className="text-gradient">Criptomoedas</span>
        </S.SectionTitle>
        <S.IconBadge>
          <TrendingUp />
        </S.IconBadge>
      </S.TitleContainer>
      <S.Description>
        Acompanhe o mercado de criptomoedas em tempo real com tecnologia de ponta
      </S.Description>
      <S.StatusRow>
        <S.PulseDot />
        <S.RealTimeText>DADOS EM TEMPO REAL</S.RealTimeText>
        <S.PulseDot />
      </S.StatusRow>
    </S.SectionWrapper>
  );
};
