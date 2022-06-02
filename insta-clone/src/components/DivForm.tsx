import { ReactComponentElement } from "react";
import Insta from '../../src/imgs/Insta.png'
import getInOn from '../../src/imgs/getInOn.png'
import AppStore from '../../src/imgs/AppStore.png'
import styled from "styled-components";
import DivForget from "./DivForget";
interface Props{
    children?: React.ReactNode;
    img?: string;
}
export default function DivForm(prop: Props){
    const {children, img} = prop
    const DivFormStyled = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 50%;
        border: 1px solid rgb(219,219,219);
        `
     const Form = styled.form`
        width:80%;
        height:60%;
        border:1px solid rgb(219,219,219);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: space-around;
        input: focus ~ .floating,
        input:not(:focus):valid ~ .floating{
            top: 8px;
            bottom: 10px;
            left: 20px;
            font-size: 11px;
            opacity: 1;
        }
        .floating{
            position: relative;
            pointer-events: none;
            top: -33px;
            bottom: -3px;
            left: -57px;
            transition: 0.2s ease all;
          }
     `   
     const DivInsta = styled.div`
        background: url(${Insta});
        background-repeat:no-repeat;
        background-position:center;
        height:100px;
        width:100%;

     `
     const Input = styled.input`
        width:80%;
        height:40px;
        border-radius:4px;
        border:1px solid rgb(219,219,219);
        padding:5px;
     `
     const Button = styled.button`
        width:80%;
        height:30px;
        border-radius:4px;
        background:#0095f6;
        color:white;
        border:none;
        `
    const DivOr = styled.div`
        width:80%;
        height:30px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        span{
            color:#8e8e8e;
        }
    `
    const Span = styled.span`
        color:#385185;
        font-size:14px;
        font-weight:bold;

    `
    const SpanPlaceHolder = styled.span`
        color:#385185;
        font-size:14px;
        font-weight:bold;

    `

    const DivLine = styled.div`
        width:80%;
        height:1px;
        background:rgb(219,219,219);
        margin: 0px 20px 0px;

    `
    const Div = styled.div`
        width:80%;
        height:30px;
        display:flex;
        justify-content:center;
      
    `
    const Img = styled.img`
        width: 146px;
        height: 45px;
        margin:0px 20px 0px;
        src:${img};
    `

    return (
        <DivFormStyled>
            <Form>
                <DivInsta/>
                <Input/>
                <SpanPlaceHolder className="floating">Phone number, username, or email</SpanPlaceHolder>
                <Input type="password"/>
                <SpanPlaceHolder className="floating">Password</SpanPlaceHolder>
                <Button>Log In</Button>
                <DivOr>
                    <DivLine/>
                    <Span>OR</Span>
                    <DivLine/>
                </DivOr>
                <Div>
                    <Span>Log in with Facebook</Span>
                </Div>
                    <Span>Forgot password?</Span>
            </Form>
            <DivForget/>
            <p>Get the app.</p>
            <Div>
                <Img src={`${AppStore}`}/>
                <Img src={`${getInOn}`}/>
                </Div>
        </DivFormStyled>
    )
}