import React,{ useRef , useEffect} from "react";
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
        align-items: stretch;
        justify-content: space-between;
        height: 100%;
        width: 50%;
       
     
        `
     const Form = styled.form`
        width:80%;
        height:60%;
        border:1px solid rgb(219,219,219);
        display:flex;
        flex-direction:column;
        background-color: #fff;
        align-items:center;
        justify-content: space-between;
       .floating{
            position: relative;
            pointer-events: none;
            top: -26px;
            bottom: -3px;
            left: -42px;
            transition: 0.2s ease all;
          }
        .floating-Pass{
            position: relative;
            pointer-events: none;
            top: -28px;
            bottom: -3px;
            left: -114px;;
            transition: 0.2s ease all;
          }
          .divInput{
              display:flex;
              flex-direction:column;
              width:100%;
              justify-content:space-around;
              align-items:center;
              padding:5px;
          }
     `   
     const DivInsta = styled.div`
        background: url(${Insta});
        background-repeat:no-repeat;
        background-position:center;
        background-size: 175px 51px;
        height:165px;
        width:100%;

     `
     const Input = styled.input`
        width:80%;
        height:40px;
        border-radius:4px;
        background-color: rgb(245, 245, 245,0.86);
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
        cursor:pointer;
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
        font-size:14px;
        color:#8e8e8e;
        position:absolute;
    `

    const DivLine = styled.div`
        width:80%;
        height:1px;
        background:rgb(219,219,219);
        margin: 0px 20px 0px;

    `
    const Div = styled.div`
        width:80%;
        height: 60px;
        display:flex;
        justify-content:center;
        margin:2px;
      
    `
    const Img = styled.img`
        width: 146px;
        height: 45px;
        margin:0px 20px 0px;
        src:${img};
    `
    const Container = styled.div`
        width:100%;
        height:min-content;
        display:flex;
        justify-content:center;
        align-items:center;
    `
    const spanLoginRef = useRef<HTMLSpanElement>(null);
    const InputSpanLoginRef = useRef<HTMLSpanElement>(null);
    const InputSpanPassRef = useRef<HTMLSpanElement>(null);  
    const spanPassRef = useRef<HTMLSpanElement>(null);  
    const buttonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const InputSpanLogin = InputSpanLoginRef.current;
        const spanLogin = spanLoginRef.current as HTMLSpanElement;
        const InputSpanPass = InputSpanPassRef.current;
        const spanPass = spanPassRef.current as HTMLSpanElement;
        const button = buttonRef.current as HTMLButtonElement;

       InputSpanLogin?.addEventListener('focus', (e) => {
                spanLogin.style.top = `${-45}px`;
                spanLogin.style.backgroundColor = ` rgb(245, 245, 245,0.86)`;
                spanLogin.style.padding = `0 10px`;
                spanLogin.style.fontSize = `9px`;
                spanLogin.style.left = `${-64}px`
                InputSpanLogin.onblur = (ev) => {
                spanLogin.style.top = `${-26}px`;
                spanLogin.style.left = `${-64}px`;
                spanLogin.style.backgroundColor = ` rgb(245, 245, 245,0.86)`;
                spanLogin.style.padding = `0`;
                spanLogin.style.fontSize = `11px`;
                }

           
       })
       InputSpanPass?.addEventListener('focus', (e) => {
        spanPass.style.top = `${-45}px`;
        spanPass.style.backgroundColor = ` rgb(245, 245, 245,0.86)`;
        spanPass.style.padding = `0 10px`;
        spanPass.style.fontSize = `9px`;
            InputSpanPass.onblur = (ev) => {
                spanPass.style.top = `${-26}px`;
                spanPass.style.left = `${-112}px`;
                spanPass.style.backgroundColor = ` rgb(245, 245, 245,0.86)`;
                spanPass.style.padding = `0`;
                spanPass.style.fontSize = `14px`;
        }
       })
    

    })
    return (
        <DivFormStyled>
            <Form>
                <DivInsta/>
                <div className="divInput">
                   <Container>
                        <Input ref={InputSpanLoginRef} type="Login" />
                        <SpanPlaceHolder ref={spanLoginRef} className="floating">Phone number, username, or email</SpanPlaceHolder>
                   </Container>
                    <Container>
                        <Input ref={InputSpanPassRef} type="password"/>
                        <SpanPlaceHolder ref={spanPassRef} className="floating-Pass">Password</SpanPlaceHolder>
                    </Container>
                </div>
                <progress onClick={(e)=> console.log(e.eventPhase += 50)}>Log In</progress>
                <DivOr>
                    <DivLine/>
                    <Span>OR</Span>
                    <DivLine/>
                </DivOr>
                <Div>
                    <Span>Log in with Facebook</Span>
                </Div>
                <Div>
                    <Span>Forgot password?</Span>
                </Div>
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