import Image from 'next/image'
import { Inter } from 'next/font/google'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 32px;
  `
  
  const Button = styled.button`
  width: 50%;
  color: #fff;
  height: 5rem;
  background: #ff5959;
  border-radius: 30px;
`

const Desc = styled.div`
  font-size: 5px;
  margin-top: 10px;
`
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //⭐✨🌞🌙❤⭐✨🌞🌙❤
  return (
    <Wrapper>
      <Button onClick={() => window.location.href = './atlas'}>⭐Fantasy⭐</Button>
      <Desc>FANTASY IS BEGINNING OF DREAM. LOOK FORWARD TO IT!✨✨✨</Desc>
    </Wrapper>
  )
}
