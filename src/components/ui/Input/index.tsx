import React from "react";
import * as S from "./styles";

interface inputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  placeholder: string;
}

export const Input = (props: inputProps) => {
  return (
    <S.StyledInput
      placeholder={props.placeholder}
      value={props.searchTerm}
      onChange={(e) => props.setSearchTerm(e.target.value)}
    />
  );
};
