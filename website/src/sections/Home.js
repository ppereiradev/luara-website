import React, { useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import '../assets/css/home.scss';
import anime from "animejs/lib/anime.es.js"

export default function Home() {

  useEffect(() => {
    // Wrap every letter in a span
    const textWrapperWelcome = document.querySelector('.welcome-text');

    if(textWrapperWelcome){
      textWrapperWelcome.innerHTML = textWrapperWelcome.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          targets: '.welcome-text .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70*i
        }).add({
          targets: '.welcome-text',
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }

    // Wrap every letter in a span
    const textWrapperIntroduction = document.querySelector('.introduction-text');

    if(textWrapperIntroduction){
      textWrapperIntroduction.innerHTML = textWrapperIntroduction.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          targets: '.introduction-text .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 70*i
        }).add({
          targets: '.introduction-text',
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }

    // Wrap every letter in a span
    const textWrapperTitle = document.querySelector('.title-text');

    if(textWrapperTitle){
      textWrapperTitle.innerHTML = textWrapperTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          targets: '.title-text .letter',
          translateY: [-100,0],
          easing: "easeOutExpo",
          duration: 2400,
          delay: (el, i) => 30 * i
        }).add({
          targets: '.title-text',
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }

  })
  return (
    <Flex id='home-container'>
      <Flex id='home-container-content'>
        <Box id='home-container-content-stripe'></Box>
        <Flex id='home-container-content-flex'>
          <Text id='home-container-center-flex-welcome-text' className='welcome-text'>Bem-vindo(a) à minha Home Page!</Text>
          <Flex id='home-container-center-flex-text'>
            <Box id='home-container-center-flex-text-box'>
              <Text id='home-container-center-flex-text-box-title' className='title-text'>Dra. Luara Luiza</Text>
              <Text id='home-container-center-flex-text-box-subtitle'>C i r u r g i ã - D e n t i s t a</Text>
            </Box>
          </Flex>
          <Text id='home-container-center-flex-introduction-text' className='introduction-text'>Aqui você vai conhecer um pouco mais sobre mim e minhas especialidades!</Text>
          <Box  id='home-container-content-image'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/img/IMG_0011.PNG'})`
            }}
          ></Box>
        </Flex>

      </Flex>
    </Flex>
  );
}
