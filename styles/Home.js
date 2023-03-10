import styled from 'styled-components';

// Home styles
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

export const Greeting = styled.h1`
  font-size: 2rem;
  margin: 30px 0;
  text-align: center;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 60%;
  margin-bottom: 20px;

  input[type='text'] {
    width: 100%;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ddd;
    margin-right: 10px;
    font-size: 1rem;
  }

  button[type='submit'] {
    padding: 10px 20px;
    background-color: #0070f3;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 10px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const ChatBotResponses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

// ChatBotResponse styles
export const ChatBubbleWrapper = styled.div`
  display: flex;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
`;

export const UserBubble = styled.div`
  background-color: ${({ isUser }) => (isUser ? '#0070f3' : '#f0f0f0')};
  color: ${({ isUser }) => (isUser ? '#fff' : '#333')};
  padding: 10px;
  border-radius: 10px;
  max-width: 60%;
`;

export const BotBubble = styled(UserBubble)`
  background-color: #f0f0f0;
  color: #333;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

