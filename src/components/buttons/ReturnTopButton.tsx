import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMedia } from 'use-media'
import { animateScroll as scroll } from 'react-scroll'

const Button = styled.a<{isButtonActive:boolean}>`
  position: fixed;
  right: 5px;
  bottom: 20px;
  height: 50px;
  text-decoration: none;
  font-weight: bold;
  transform: ${({ isButtonActive }) => (isButtonActive ? 'translateY(0) rotate(90deg)' : 'translateY(100) rotate(90deg)')};
  visibility: ${({ isButtonActive }) => (isButtonActive ? 'visible' : 'hidden')};
  opacity: ${({ isButtonActive }) => (isButtonActive ? '1' : '0')};
  transition: 1s;
  font-size: 90%;
  line-height: 1.5rem;
  color: rgb(245, 158, 11);
  padding: 0 0 0 35px;
  border-top: solid 2px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    left: 0px;
    width: 15px;
    border-top: solid 2px;
    transform: rotate(35deg);
    transform-origin: left top;
  }
`

export default function ReturnTopButton() {

  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

  const scrollToTop = () => {
    scroll.scrollToTop({smooth: true})
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 200  //ボタンを表示させたい位置
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const isWide = useMedia({ maxWidth: "767px" });

  return (
    <>
      {isWide &&
        <Button
          isButtonActive={isButtonActive}
          onClick={scrollToTop}>
          TOP
        </Button>
      }
    </>
  )
}
