import styled from "styled-components"
import Celphone from '../../src/imgs/celular.png'
import photeOne from '../../src/imgs/slide-.png'
import photeTwo from '../../src/imgs/slide--.png'
import photeTree from '../../src/imgs/slide---.png'
import React,{useEffect, useState , useRef} from 'react'
interface Props {
    children: React.ReactNode;
}
export default function DivSlide(prop: Props) {
    const {children} = prop;
    const Div = styled.div`
    width: 50%;
    height: 100%;
    background: url(${Celphone}), 468.32px 634.15px;
    background-repeat:no-repeat;
    background-position:center; 
    @media(max-width: 900px) {
        display:none;
      }
`
    const DivSlider = styled.div`
        width: 54%;
        height: 83%;
        position: relative;
        top: 36px;
        left: 156px;
        img{
            position: absolute;
            background: 468.32px 634.15px;
            
            transition: background 1s;
        }
        .see{
            opacity: 1;
            animation:  3s ease-in 1s infinite reverse both running slidein;
        }
        .see-no{
            opacity: 0;
        }
    `
    const photeOneRef = useRef<HTMLImageElement>(null);
    const photeTwoRef = useRef<HTMLImageElement>(null);
    const photeTreeRef = useRef<HTMLImageElement>(null);
    const time = 4000
    useEffect(() => {
        const photeOne = photeOneRef.current;
        const photeTwo = photeTwoRef.current;
        const photeTree = photeTreeRef.current;
        setTimeout(() => {
            if(photeOne?.classList.contains('see')){
                photeOne.classList.add('see-no')
                photeOne.classList.remove('see')
            }
        }, time);
      

    }
   
    )
    return(
        <Div>
           <DivSlider>
               <img className = "see" ref ={photeOneRef} src={`${photeOne}`} />
               <img className = "see" ref ={photeTwoRef} src={`${photeTwo}`} />
               <img className = "see" ref ={photeTreeRef} src={`${photeTree}`} />
           </DivSlider>
        </Div>
    )
}