import styled from "styled-components";

export default function DivForget(){
    const DivForgetStyled = styled.div`
        display: flex;
        width: 80%;
        height: 50px;
        background-color: #fff;
        border: 1px solid rgb(219,219,219);
       span{
            margin:auto;
        }
    `
    
    
    return(
        <DivForgetStyled>
            <span>Don't have an account? </span>
        </DivForgetStyled>
    )
}