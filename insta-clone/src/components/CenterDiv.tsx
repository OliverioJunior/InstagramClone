import styled from "styled-components";
interface Props {
    children: React.ReactNode;
}
export default function CenterDiv(prop: Props) {
    const { children } = prop;
    const CenterDivStyled = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
        max-width: 935px;
    
      

        `
    return <CenterDivStyled>{children}</CenterDivStyled>;
}
