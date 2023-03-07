import styled, { keyframes } from 'styled-components';
import React, { CSSProperties } from 'react';

interface Dot {
  style?: CSSProperties;
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 60%;
  justify-content: center; 
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  width: 100%;
  ::placeholder {
    color: #a0a0a0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin: 0 5px;
  background-color: #35a9ec;
  color: white;
  font-size: 16px;
  width: 120px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &.send {
    background-color: gray;
    color: white;
    margin-top: -8px;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  background-color: #eeeeee;
  justify-content: flex-end;
  padding: 30px;
  width: 60%;
  border-radius: 15px;
  border: 3px solid #64646480;
  height: 400px;
  overflow-y: auto;
  flex-direction: column;
`;

export interface ChatBubbleProps {
  isUser?: boolean;
}

export const ChatBubble = styled.div<ChatBubbleProps>`
  display: flex;
  background-color: ${(props) => (props.isUser ? '#007aff' : '#fff')};
  color: ${(props) => (props.isUser ? '#fff' : '#333')};
  border-radius: ${(props) =>
    props.isUser ? '20px 20px 0 20px' : '20px 20px 20px 0'};
  padding: 10px;
  margin-bottom: 10px;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  max-width: 80%;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${(props) =>
      props.isUser ? '0 20px 20px 0' : '20px 20px 0 0'};
    border-color: ${(props) =>
      props.isUser ? 'transparent #007aff transparent transparent' : '#fff transparent transparent transparent'};
    right: ${(props) => (props.isUser ? '-18px' : 'auto')};
    left: ${(props) => (props.isUser ? 'auto' : '-18px')};
    bottom: -20px;
  }
`;


export const ChatBotImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const TypingAnimation = () => {
  return (
    <DotsContainer>
      <Dot />
      <Dot />
      <Dot />
    </DotsContainer>
  );
};


const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


const typing = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(5px);
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: #a0a0a0;
  animation: ${typing} 1s linear infinite alternate;
  animation-delay: ${(props) => props.delay || '0s'};
`;

export default TypingAnimation;

