import styled from "styled-components";
import { device } from "../media/device";

export const Page = styled.div`
  min-height: 100%;
  background-color: #e3dfd9;
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80%;
  background-color: #ffffff;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media ${device.mobile} {
    width: 80%;
    grid-template-columns: 1fr;
    align-items: flex-end;
    padding: 25px 0;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: center;

  @media ${device.mobile} {
    position: absolute;
    top: 0;
    padding: 10px;
    justify-content: center;
    width: max-content;
    left: 50%;
    transform: translate(-50%, -40%);
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 -5px 2px rgb(0 0 0 / 5%);
  }
`;

export const ContainerForm = styled.div`
  align-items: center;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 0 1rem;
  }
`;

export const NewUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.mobile} {
    h4,
    a {
      margin: 10px 0 20px;
      font-size: 1rem !important;
    }
  }
`;

export const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    flex-direction: column;
    gap: 25px;
    box-sizing: border-box;
  }
`;

export const GroupInput = styled.div`
  position: relative;
  width: 100%;
  input {
    box-sizing: border-box;
    padding: 20px 10px;
    font-weight: bolder;
    font-size: 0.9rem;
    width: 100%;
    height: 100%;
    border: none;
    background-color: #f2f4f8;
    border-radius: 15px;
    outline: none;
    &::placeholder {
      color: black;
    }
  }
  small {
    position: absolute;
    top: 100%;
    left: 0;
    font-weight: bolder;
    font-size: 0.7rem;
    color: #dc3545;
  }
`;

export const ButtonStyle = styled.button`
  padding: 15px;
  cursor: pointer;
  background-color: #e1b168;
  min-width: 100%;
  font-weight: bolder;
  font-size: 0.9rem;
  border: none;
  border-radius: 30px;
  color: white;
  outline: none;
  text-align: center;
  box-sizing: border-box;
`;

export const FlexTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 25px;
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  display: block;
  margin: auto;

  @media ${device.mobile} {
    width: 200px;
    margin: 0;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  font-size: 40px;
  text-align: left;

  @media ${device.mobile} {
    font-size: 1.8rem;
    margin: 3px 0;
  }
`;

export const Description = styled.h4`
  font-size: 20px;
  text-align: center;
`;

export const Login = styled.h4`
  a {
    text-decoration: none;
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    color: #e1b168;
    cursor: pointer;
    &:hover {
      color: #ff0000;
    }
  }
`;

export const Signup = styled.h4`
  a {
    text-decoration: none;
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    color: #e1b168;
    cursor: pointer;
    &:hover {
      color: #ff0000;
    }
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 0.9rem;
  gap: 10px;
  label {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    input {
      width: 20px;
      height: 20px;
      accent-color: #e1b168;
      color: white;
      cursor: pointer;
      pointer-events: all;
      &:checked ~ span {
        background-color: #e1b168;
        color: white;
      }
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      width: 100%;
      background-color: #f2f4f8;
      color: #f2f4f8;
      pointer-events: none;
      border-radius: 3px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
