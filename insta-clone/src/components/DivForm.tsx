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
        max-width: 350px;
        flex-basis: auto;
        `
    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 350px;
        background: white;
        border: 1px solid #dbdbdb;
    `
    const DivImgInsta = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width:100%;
        background: url(${Insta});
        background-repeat: no-repeat;
        background-position: center;
    `
    const DivContainerInput = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        align-items:center;
        width: 85%;
        height: min-content;
       
       
        div{
            width: 100%;
            display: flex;
            justify-content:center;
            align-items: center;
            flex-wrap: wrap;
            padding: 0px 15px;
        }
        span{
            position: relative;
            left: -90px;
            top: 30px;
            color:#000;
            background: rgb(245,245,245);
            border-radius: 5px;
            padding: 0px 5px;
        }

    `
    const Input = styled.input`
        height: 38px;
        background: rgb(245,245,245);
        border: 1px solid #dbdbdb;
        color: #000;
        border-radius: 3px;
        padding: 0 10px;
        flex-basis: 100%;
    `
    const Button = styled.button`
        width: 100%;
        height: 38px;
        background: #B2DFFC;
        color: #fff;
        border: none;
        border-radius: 5px;
        margin:5px;
    `
    const DivLine = styled.div`
        width: 150px ;
        height: 1px;
        background: #dbdbdb;
        margin: 5px;
    `
    const ContainerDivLine = styled.div`
        margin: 5px 0px;
        height:40px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const DivOrLogin = styled.div`
        display: flex;
        height:40px;

    `
    const DivForget = styled.div`
        display: flex;
        height:40px;
    `
    const DivOutCont = styled.div`
        
        flex-basis: 33%;
        display: flex;
        border: 1px solid #000;
        justify-content: center;
        align-items: center;
        background: white;
    `
    const ContainerAppStore = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
    `
    const DivGet = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
    `
    const DivAppStore = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
        img{
            width: 40%;
            margin: 10px;

        }
    `
    
     
    return (
        <DivFormStyled>
            <Form>
                <DivImgInsta/>
                <DivContainerInput>
                    <div>
                        <span>UserName</span>
                        <Input type="text"/>
                    </div>
                    <div>
                        <span>Password</span>
                        <Input type="password" placeholder="Password"/>
                    </div>
                    <div>
                    <Button>Log In</Button>
                    </div>
                </DivContainerInput>
                    <ContainerDivLine>
                        <DivLine/>
                            <p>OR</p>
                        <DivLine/>
                    </ContainerDivLine>
                    <DivOrLogin>
                        Log in with Facebook
                    </DivOrLogin>
                    <DivForget>
                        Forgot password?
                    </DivForget>
            </Form>
            <DivOutCont>
                 Don't have an account? 
            </DivOutCont>
            <ContainerAppStore>
                <DivGet>Get the app</DivGet>
                <DivAppStore>
                    <img src={getInOn} alt=""/>
                    <img src={AppStore} alt=""/>
                </DivAppStore>
            </ContainerAppStore>

        </DivFormStyled>
    )
}