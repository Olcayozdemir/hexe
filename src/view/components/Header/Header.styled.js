import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: white;
  display:flex;
  align-items: center;
  height: 68px;
  padding: 0px 15px;
  box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.5);
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  flex-direction: row;
  
  img{
    width: auto;
    height: 100%;
  }

  ul{
    list-style:none;
    display:flex;
    width:20%;
    justify-content: space-between;
    font-family: Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    justify-self: center;
    padding: 0px;
    align-self: center;
    position: absolute;
    padding-left: 40%;

  li {
  flex: 1;
  padding:10px;
  }

   a{
     width:100%;
    position: relative;
    display: flex;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    color: black;
    background:white;
    font-weight: 800;
    text-decoration: none;
    overflow: hidden;
    transition: clip-path 400ms ease;
    justify-content: center;
    align-items: center;
    padding:10px;
    &:hover::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      align-self: center;
      display: flex;
    }
  
    &::before {
      position: absolute;
      content: attr(data-content);
      color: white;
      background: black;
      clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
      transition: clip-path 400ms ease;
      align-self: center;
      padding:10px 20px;
    }
  }
  }
`;
