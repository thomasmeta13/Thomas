import React, { useState, useEffect } from 'react';
import { Container, ProfileImage, Title, InputContainer, Input, ButtonContainer, Button, ChatContainer, ChatBubble, ChatBotImage } from '../components/components';
import TypingAnimation from "../components/components"
import { generateResponse } from './api';
import { renderToString } from 'react-dom/server';
import { InlineWidget } from 'react-calendly';

const endpoint = 'http://18.116.20.1:5001/generate-response';

function HomePage() {
  const [query, setQuery] = useState<string>('');
  const [messages, setMessages] = useState<{ isUser: boolean; message: string }[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);


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
      message: renderToString(
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
    setMessages((prevMessages) => [
      ...prevMessages,
      { isUser: true, message: query }
    ]);
    setQuery('');

    setIsBotTyping(true);
    const generatedResponse = await generateResponse(query);
    setIsBotTyping(false);

    setMessages((prevMessages) => [
      ...prevMessages,
      { isUser: false, message: generatedResponse }
    ]);
  };


  
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '1rem', marginTop: '1rem' }}>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ marginRight: '1rem', textDecoration: 'none', fontFamily: 'Roboto', fontSize: '1.2rem', color: 'black' }}></i>
          Twitter
        </a>
        <br />
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" style={{ marginRight: '1rem', textDecoration: 'none', fontFamily: 'Roboto', fontSize: '1.2rem', color: 'black' }}></i>
          GitHub
        </a>
        <br />
        <a href="https://yourresume.com" target="_blank" rel="noopener noreferrer">
          <i className="far fa-file-alt" style={{ marginRight: '1rem', textDecoration: 'none', fontFamily: 'Roboto', fontSize: '1.2rem', color: 'black' }}></i>
          Resume
        </a>
      </div>


      <ProfileImage src="thomas/.jpg" />
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
        {isBotTyping && (
          <ChatBubble key="typing" isUser={false}>
            <ChatBotImage src="/thomas.jpg" />
            <div>
              <div><strong>Thomas Meta</strong></div>
              <TypingAnimation />
            </div>
          </ChatBubble>
        )}
      </ChatContainer>
      {/*<InlineWidget url="https://calendly.com/tmeta-solarity/30min?hide_event_type_details=1&hide_gdpr_banner=1" styles={{ minWidth: '420px', height: '330px' }}></InlineWidget>*/}
    </Container>
  );
}

export default HomePage;
