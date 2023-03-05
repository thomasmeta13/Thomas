import { useState, useEffect } from 'react';
import { Container, ProfileImage, Title, InputContainer, Input, ButtonContainer, Button, ChatContainer, ChatBubble, ChatBotImage } from '../components/components';
import { generateResponse } from './api';

const endpoint = 'http://localhost:5001/generate-response';

function HomePage() {
  const [query, setQuery] = useState<string>('');
  const [messages, setMessages] = useState<{ isUser: boolean; message: string }[]>([]);


  useEffect(() => {
    // add welcome message when component mounts
    setMessages([{ isUser: false, message: 'Hi! This is the chat room' }]);
  }, []);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleAIClick = () => {
    const aiMessage = {
      isUser: false,
      message: (
        <div>
          <p>
            I have always been curious about what machines had to offer me, that is why I am working with:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>embeddings, here is a <a href="https://en.wikipedia.org/wiki/Word_embedding" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>link</a></li>
            <li>internal knowledge search</li>
            <li>image and text generation </li>
            <li>prompt engineering and framework, langchain</li>
            <li>ML python libraries, Pytorch, NLP libraries, numpy etc</li>
          </ul>
        </div>
      ),
    };
    setMessages([...messages, aiMessage]);
  };

  const handleGenerateResponse = async () => {
    setMessages([...messages, { isUser: true, message: query }]);
    const generatedResponse = await generateResponse(query);
    setMessages((prevMessages) => [
      ...prevMessages,
      { isUser: false, message: generatedResponse },
    ]);
    setQuery('');
  };
  
  return (
    <Container>
      <ProfileImage src="/.jpg" />
      <Title>Get to know me better</Title>
      <InputContainer>
        <Input type="text" value={query} onChange={handleQueryChange} placeholder={"Ask me anything... "} />
        <ButtonContainer>
          <Button onClick={handleGenerateResponse} className="send">Send</Button>
        </ButtonContainer>
      </InputContainer>
      <ButtonContainer>
          <Button onClick={handleAIClick} >AI</Button>
          <Button onClick={() => setQuery('')}>Web3</Button>
          <Button onClick={() => setQuery('')}>WebXR</Button>
          <Button onClick={() => setQuery('')}>Founder</Button>
        </ButtonContainer>
      <ChatContainer>
        {messages.map((message, index) => (
          <ChatBubble key={index} isUser={message.isUser}>
          {!message.isUser && <ChatBotImage src="/thomas.jpg" />}
          <div>
          {!message.isUser && <div><strong>Thomas Meta</strong></div>}
          <div>{message.message}</div>
          </div>
          </ChatBubble>
        ))}
      </ChatContainer>
    </Container>
  );
}

export default HomePage;
