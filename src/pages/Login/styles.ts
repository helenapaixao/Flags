import styled from 'styled-components'
import Background from '../../assets/image/background.png'

export const Container = styled.div`
 background: url(${Background});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  h1 {
    color: #000;
  }
`

export const Content = styled.div`
 	position:absolute;
		left:50%;
		top:50%;
		margin-left:-110px;
		margin-top:-40px;

h1 {
  color: #000;
}
 button {
   
  }

`;