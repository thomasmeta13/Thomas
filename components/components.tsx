import styled, { keyframes } from 'styled-components';
import React, { CSSProperties } from 'react';
import Graph from 'react-graph-vis';
//add generate random photo as a button and take a random photo from pics you already got in stable diffusion, can add real or fake
// dove vedi anche i risultati delle altre persone come would you rather
interface DotProps {
  delay?: string | number;
}

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  }
};

export const TimelineContainer = styled.div`
  height: 100%;
  width: 60%;
  background-color: #292929;
  border: 2px solid white;
  border-radius: 15px;
  text-align: center;
  padding: 1rem;
  margin-top: 0;
  margin-bottom: 10px;
`;
export const GraphComponent = ({ graph }) => {
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export const Socials = styled.div`
display: flex;
margin-top: -30px;
margin-left: 38em;
overflow-x: scroll;
width: 100%;
white-space: nowrap;
&.send:
&:hover {
  opacity: 0.8;
  cursor: pointer;
}
`;
export const Banner = styled.img`
  width: 103.6%;
  margin-left: -16px;  
  border-radius: 12px 12px 0px 0px;
  margin-top: -1em;
  max-height: 140px;
  padding:0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid white;


`;

export const Title = styled.h1`
  font-size: 21px;
  margin-top: 2.3em;
`;

export const Subtitle = styled.p`
  font-size: 13px;
  font-weight: light;
  color: #a0a0a0;
  margin-top: 4px;
  width: 100%;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: px;
  width: 100%;
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

export const ButtonContainer2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  justify-content: space-between;
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
`;


export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
  border: none;
  margin: 0 5px;
  background-color:#9c9c9c;
  color: white;
  font-size: 13px;
  width: 120px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &.send {
    background-color: #656665;
    color: white;
    margin-top: -8px;
    font-size: 15px;
    width: 40px;
    margin-left: -5px;
    justify-content: center;
  }
`;

export const ChatContainer = styled.div`
  align-items: flex-start;
  margin-top: 20px;
  background-color: #eeeeee;
  justify-content: flex-end;
  padding: 30px;
  width: 100%;
  border-radius: 15px;
  border: 3px solid #64646480;
  height: 460px;
  overflow-y: auto;
  flex-direction: column-reverse;
  text-align: left;
`;

export interface ChatBubbleProps {
  isUser: boolean;
}

export const ChatBubble = styled.div<ChatBubbleProps>`
  background-color: ${(props) => (props.isUser ? '#007aff' : '#fff')};
  color: ${(props) => (props.isUser ? '#fff' : '#333')};
  border-radius: ${(props) =>
    props.isUser ? '20px 20px 0 20px' : '20px 20px 20px 0'};
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  max-width: 80%;
  font-size: 14px;
  float: ${(props) => (props.isUser ? 'right' : 'left')};
  clear: both;

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

export const ChatBubbleBotName = styled.span<{ isUser: boolean }>`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1em;
  margin-right: ${({ isUser }) => (isUser ? '0' : '0.5rem')};
  margin-left: ${({ isUser }) => (isUser ? '0.5rem' : '0')};
`;

export const ChatBotImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Calendar = styled.div`
&:hover {
  opacity: 0.8;
  cursor: pointer;
}
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
  padding-top: 13px;
  margin-left: -19px;
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

const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: #a0a0a0;
  animation: ${typing} 1s linear infinite alternate;
  animation-delay: ${(props) => props.delay || '0s'};
`;


export default TypingAnimation;


