import styled from '@emotion/styled'

export const Summary = styled.summary`
  background: lightskyblue;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  display: block;
  outline: none;
  width: 60vw;
  border-bottom: 2px solid;
  height: 80px;
  line-height: 80px;
  user-select: none;
  transition: background 0.3s;
  &:hover {
    background: royalblue;
  }
  &::-webkit-details-marker {
    display: none;
  }
`

export const P = styled.p`
  background: lightgray;
  font-size: 2rem;
  margin-top: 0;
  width: 60vw;
`
