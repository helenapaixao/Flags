import styled from 'styled-components'
import Background from '../../assets/image/background.png'

export const Container = styled.div`
 background: url(${Background});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(100%);
`