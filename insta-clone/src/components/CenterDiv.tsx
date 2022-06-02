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
        width: 935px;
        border: 1px solid black;

        `
    return <CenterDivStyled>{children}</CenterDivStyled>;
}
