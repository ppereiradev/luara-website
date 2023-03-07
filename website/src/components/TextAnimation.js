import React from 'react';
import styled, { keyframes } from 'styled-components';

export function SlideTextAnimation(props){
  const reactArray = props.value.split(" ");

  return <WrapperWelcome>{reactArray.map((item, index) => (
    <span key={props.value + '__' + index}>{' ' + item}</span>
  ))}</WrapperWelcome>
}

const animationWelcome = keyframes`
    0% { opacity: 0; filter: blur(10px) }
    100% { opacity: 1; filter: blur(0px) }
`

const WrapperWelcome = styled.span`
    display: inline-block;
    span{
        opacity: 0;
        animation-name: ${animationWelcome};
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    span:nth-child(1){
        animation-delay: 0.1s;
    }
    span:nth-child(2){
        animation-delay: 0.3s;
    }
    span:nth-child(3){
        animation-delay: 0.5s;
    }
    span:nth-child(4){
        animation-delay: 0.7s;
    }
    span:nth-child(5){
        animation-delay: 0.9s;
    }
    span:nth-child(6){
        animation-delay: 1.1s;
    }
    span:nth-child(7){
        animation-delay: 1.3s;
    }
    span:nth-child(8){
        animation-delay: 1.5s;
    }
    span:nth-child(9){
        animation-delay: 1.7s;
    }
    span:nth-child(10){
        animation-delay: 1.9s;
    }
    span:nth-child(11){
        animation-delay: 2.1s;
    }
    span:nth-child(12){
        animation-delay: 2.3s;
    }
`
