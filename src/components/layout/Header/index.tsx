import { Input } from '@/components/ui/Input';
import * as S from './styles';
import { Search, TrendingUp, Zap } from "lucide-react";




export const Header = () => {
  return (
    <S.Container>
      <S.InnerWrapper>
        <S.LeftGroup>
          <S.IconWrapper>
            <TrendingUp className="icon" />
          </S.IconWrapper>

          <S.TitleGroup>
            <S.Title>CryptoCheck</S.Title>
          </S.TitleGroup>
        </S.LeftGroup>

        <S.SearchWrapper>
          <S.SearchBackground />
          <S.SearchInner>
            <Search className="search-icon" />
           <Input placeholder="Buscar criptomoeda..." />
            <S.InputOverlay />
          </S.SearchInner>
        </S.SearchWrapper>
      </S.InnerWrapper>
    </S.Container>
  );
};
