import React from "react";
import * as S from "./styles";


type inputProps = {
    placeholder: string;
}



export const Input = (props:inputProps) => {
    return(
<S.StyledInput placeholder={props.placeholder} />
    )
}