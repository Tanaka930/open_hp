import { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function ReturnTopButton() {

  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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

  // const normalStyle = {
  //   opacity: 0,
  //   transition: '0.5s',
  //   pointerEvents: 'none'
  // }
  // const activeStyle = {
  //   opacity: 1,
  //   transition: '0.5s'
  // }
  // const style = isButtonActive ? activeStyle : normalStyle

  const Button = isButtonActive ?
    styled.a`
    opacity: 1;
    transition: 0.5s;

      position: fixed;
      right: 5px;
      bottom: 20px;
      height: 50px;
      text-decoration: none;
      font-weight: bold;
      transform: rotate(90deg);
      font-size: 90%;
      line-height: 1.5rem;
      color: rgb(245, 158, 11);
      padding: 0 0 0 35px;
      border-top: solid 1px;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: -1px;
        left: 0px;
        width: 15px;
        border-top: solid 1px;
        transform: rotate(35deg);
        transform-origin: left top;
      }`
    :
    styled.a`
      opacity: 0;
      transition: 0.5s;
      pointerEvents: none;`

  return (
    <Button
    onClick={returnTop}>
    TOP
  </Button>
  )
}
