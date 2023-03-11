import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import { Container, ProfileImage, Calendar, Socials, Banner, Title, InputContainer, TimelineContainer, GraphComponent, Input, ChatBubbleBotName, ButtonContainer, ButtonContainer2, Subtitle, Button, ChatContainer, ChatBubble, ChatBotImage } from '../components/components';
import TypingAnimation from "./components/components"
import { generateResponse } from './api';
import { renderToString } from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faPaperPlane, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { InlineWidget } from 'react-calendly';


const graph = {
  nodes: [
    { id: 1, label: 'WebXR' },
    { id: 2, label: 'AI' },
    { id: 3, label: 'Web3' },
    { id: 4, label: 'Product Managing' },
    { id: 5, label: 'Design' },
    { id: 6, label: 'ThreeJS' },
    { id: 7, label: 'Aframe' },
    { id: 8, label: 'WebGL' },
    { id: 9, label: 'Python' },
    { id: 10, label: 'PyTorch' },
    { id: 11, label: 'C++' },
    { id: 12, label: 'Tensorflow' },
    { id: 13, label: 'SciKit' },
    { id: 14, label: 'Diffusers' },
    { id: 15, label: 'Web3JS' },
    { id: 16, label: 'Solidity' },
    { id: 17, label: 'Rust' },
    { id: 18, label: 'MongoDB' },
    { id: 19, label: 'SQL' },
    { id: 20, label: 'React' },
    { id: 21, label: 'Typescript' },
    { id: 22, label: 'JS' },
    { id: 23, label: 'Rest APIs' },
    { id: 24, label: 'Team Creation' },
    { id: 25, label: 'Product development' },
    { id: 26, label: 'Leadership' },
    { id: 27, label: 'Figma' },
    { id: 28, label: 'AdobeXD' },
  ],
  edges: [
    { from: 1, to: 6 },
    { from: 1, to: 7 },
    { from: 1, to: 8 },
    { from: 2, to: 9 },
    { from: 2, to: 10 },
    { from: 2, to: 11 },
    { from: 2, to: 12 },
    { from: 2, to: 13 },
    { from: 2, to: 14 },
    { from: 3, to: 15 },
    { from: 3, to: 16 },
    { from: 3, to: 17 },
    { from: 4, to: 24 },
    { from: 4, to: 25 },
    { from: 4, to: 26 },
    { from: 5, to: 27 },
    { from: 5, to: 28 },
  ],
};

function HomePage() {
  const [query, setQuery] = useState<string>('');
  const [messages, setMessages] = useState<{ isUser: boolean; message: string | any }[]>([]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Fetch data here and set isLoading to false once done
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    // add welcome message when component mounts
    setMessages([{ isUser: false, message: <p>Hi! This is the chat room. Im happy to answer any question you might have, appropriate or not. </p>}]);
  }, []);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    // scroll down to bottom when new message is added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);


  const handleAIClick = () => {

    const userMessage = {
      isUser: true,
      message: <p>Tell me more about your AI experience]</p>
    };

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
    setMessages([...messages,userMessage, aiMessage]);
  };

  
  const handleCryptoClick = () => {

    const userMessage = {
      isUser: true,
      message: <p>Tell me more about your Web3 experience, are you more of a rugger or a rugged?</p>,
    };

    const cryptoMessage = {
      isUser: false,
      message: (
        <div>
          <p>
            Unfortunately, I have have an experience being rugged more than rugging. My mistake is building products instead of speculations. Anyway enough about this, I'll tell you more about what I can do:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Web3js proficency, here is a <a href="https://en.wikipedia.org/wiki/Word_embedding" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>link</a></li>
            <li>Built custom smart contracts for non transferable minting on Solana</li>
            <li>Built an extension where users could send ethereum and solana through Twitter </li>
            <li><a href="https://sgn.wtf" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>SGN</a>, a P2E aggregator</li>
            <li>Received a 25k grant from Solana to build WebXR-Solana compatibility</li>
            <li>3D collections of rooms that I built on blender mintable anywhere</li>
          </ul>
        </div>
      ),
    };
    setMessages([...messages,userMessage, cryptoMessage]);
    
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleGenerateResponse();
    }
  };

  const handleWebXRClick = () => {

    const userMessage = {
      isUser: true,
      message: <p>Wtf is webXR and what have you done with it?</p>,
    };

    const webXRMessage = {
      isUser: false,
      message: (
        <div>
          <p>
            WebXR is pretty sick, it's basically Unity but JS based that runs on any device with a browser. Sounds cool right? Let me show you what I can do with it:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>3D custom websites  <a href="https://en.wikipedia.org/wiki/Word_embedding" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>link</a></li>
            <li>Aframe (VR compatible threejs framework) - iframe compatibility </li>
            <li>An extension to bring 3D virtual spaces directly inside <a href="https://chrome.google.com/webstore/detail/sgn/olmkofkehgfecicmijdhohcgglpnbnnh" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>Twitter</a></li>
            <li><a href="https://filehub.demo" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>FileHub</a>, a DAO tool aggregator with a more interactive GUI </li>
            <li>Received a 25k grant from Solana to build WebXR-Solana compatibility</li>
          </ul>
        </div>
      ),
    };
    setMessages([...messages,userMessage, webXRMessage]);
    
  };


  const handleFounderClick = () => {

    const userMessage = {
      isUser: true,
      message: <p>Wtf is webXR and what have you done with it?</p>,
    };

    const founderMessage = {
      isUser: false,
      message: (
        <div>
          <p>
            I always tried to apply everything as soon as I learned it
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><a href="https://gobusgo.net" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>GoBusGo</a>: A website where users could get a ticket to a park + bus. Built for my father company where I ran Facebook and Google ads. Over 500+ IRL customer satisfied. </li>
            <li>WebBuild: I saw building websites was fairly easy, so I started using the same formula to a lot of local companies showing the success of GoBusGo. </li>
            <li><a href="https://filehub.network" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>FileHub</a>: a DAO tool aggregator with a more interactive GUI </li>
            <li><a href="https://sgn.wtf" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>SGN</a>: a P2E aggregator </li>
            <li><a href="https://xr.berkeley.edu/" target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3' }}>Solarity</a>: a DAO tool aggregator with a more interactive GUI </li>
          </ul>
        </div>
      ),
    };
    setMessages([...messages,userMessage, founderMessage]);
    
  };

  const handleWhyClick = () => {

    const userMessage = {
      isUser: true,
      message: <p>Wtf is webXR and what have you done with it?</p>,
    };

    const iframeMessage = {
      isUser: false,
      message: (
        <div>
          <iframe src="https://filehub.network" width="550px" height="350px"></iframe>
        </div>
      ),
    };
    setMessages([...messages,userMessage, iframeMessage]);
    
  };

  const handleCalendarClick = () => {

    const userMessage = {
      isUser: true,
      message: <p>When can we chat fr fr?</p>,
    };

    const calendarMessage = {
      isUser: false,
      message: (
        <div>
          <InlineWidget url="https://calendly.com/tmeta-solarity/30min?hide_event_type_details=1&hide_gdpr_banner=1" styles={{ minWidth: '420px', height: '330px' }}></InlineWidget>
        </div>
      ),
    };
    setMessages([...messages,userMessage, calendarMessage]);
    
  };


  const handleGraphClick = () => {

    const userMessage = {
      isUser: true,
      message: <p>Wtf is webXR and what have you done with it?</p>,
    };

    const graphMessage = {
      isUser: false,
      message: (
        <div>
          <GraphComponent graph={graph} />
        </div>
      ),
    };
    setMessages([...messages,userMessage, graphMessage]);
  };
  
  <Input type="text" value={query} onChange={handleQueryChange} onKeyDown={handleKeyDown} placeholder={"Ask me anything... And make sure to check out the buttons!"} />
  

  const handleGenerateResponse = async () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { isUser: true, message: <p>{query}</p> }
    ]);
    setQuery('');

    setIsBotTyping(true);
    const generatedResponse = await generateResponse(query);
    setIsBotTyping(false);

    setMessages((prevMessages) => [
      ...prevMessages,
      { isUser: false, message: <p>{generatedResponse}</p> }
    ]);
  };
  

  
  return (
      isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
      <Container>
      <TimelineContainer>
      <Banner src="https://pbs.twimg.com/profile_banners/776818769935134720/1670841492/1500x500"/>
      <ProfileImage src="/thomas.jpg" />
      <Title>Get to know me better</Title>
      <Socials>
      <a href="https://twitter.com/your-username">
      <FontAwesomeIcon icon={faTwitter} size="lg" className="hover" style={{ margin: '0.5rem' }} /></a>
      <a href="https://twitter.com/your-username">
      <FontAwesomeIcon icon={faDiscord} size="lg" style={{ margin: '0.5rem' }} /></a>
      <a href="https://twitter.com/your-username">
       <FontAwesomeIcon icon={faGithub} size="lg" style={{ margin: '0.5rem' }} /></a>
        <Calendar><FontAwesomeIcon onClick={handleCalendarClick} icon={faCalendar} size="lg" style={{ margin: '0.5rem' }}/></Calendar>
      </Socials>
      <Subtitle>I uploaded pretty much all of my recorded life here. Learn more about my skills and experience, what I am working on and what I'd like to work on :)</Subtitle>
      <InputContainer>
        <Input type="text" value={query} onChange={handleQueryChange} onKeyDown={handleKeyDown} placeholder={"Ask me anything... And make sure to check out the buttons! "} />
        <ButtonContainer>
          <Button onClick={handleGenerateResponse} className="send">
          <FontAwesomeIcon icon={faPaperPlane} style={{ marginLeft: '-0.5rem' }} /></Button>
        </ButtonContainer>
      </InputContainer>
      <ButtonContainer2>
        <Button onClick={handleAIClick} >AI</Button>
        <Button onClick={handleCryptoClick}>Web3</Button>
        <Button onClick={handleWebXRClick}>WebXR</Button>
        <Button onClick={handleFounderClick}>Founder</Button>
        <Button onClick={handleWhyClick}>Why?</Button>
        <Button onClick={handleGraphClick}>My Graph </Button>
      </ButtonContainer2>
      <ChatContainer ref={chatContainerRef}>
        {messages.map((message, index) => (
          <ChatBubble key={index} isUser={message.isUser}>
          {!message.isUser && <ChatBotImage src="/thomas.jpg"/>}
            <div>
              {!message.isUser && <ChatBubbleBotName>Thomas Meta</ChatBubbleBotName>}
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
      </TimelineContainer>

    </Container>
    )
  );
}

export default HomePage;

