import React, { useState, useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Widget, addResponseMessage, deleteMessages } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
function App() {
  const [load, upadateLoad] = useState(true);

   const typingMessageRef = useRef(null);
  const typingIntervalRef = useRef(null);

  const bearerToken = process.env.REACT_APP_TOKEN;

  const sessionId = crypto.randomUUID();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
      // addResponseMessage('Welcome to this awesome chat!');

    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleNewUserMessage =  (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    sendMessageToAI(newMessage); 
  };



  const sendMessageToAI = async (message) => {
  try {
      addResponseMessage('💬 ...');
  // startTypingAnimation();  
    const response = await fetch(
      "https://n8n.camilo-frontado.dev/webhook/ai-agent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`
        },
        body: JSON.stringify({ message, sessionId  })
      }
    );

    const data = await response.json();
    deleteMessages(deleteMessages.length - 1);
 // stopTypingAnimation();
    addResponseMessage(data.output);
  } catch (error) {
   // stopTypingAnimation();
   // deleteMessages(deleteMessages.length - 1);
    console.error(error);
    addResponseMessage("⚠️ Error contacting AI agent.");
  }
};

  const startTypingAnimation = () => {
    let dots = 1;
    typingMessageRef.current = addResponseMessage("💬 ...");
    typingIntervalRef.current = setInterval(() => {
      const text = '💬 ' + '.'.repeat(dots);
      deleteMessages(typingMessageRef.current);
      typingMessageRef.current = addResponseMessage(text);
      dots = dots < 3 ? dots + 1 : 1;
    }, 500);
  };


  const stopTypingAnimation = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    if (typingMessageRef.current) {
      deleteMessages(typingMessageRef.current);
      typingMessageRef.current = null;
    }
  };






return (
  <Router>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="👋 Let’s Connect!"
        subtitle="Ready to Collaborate"
        className="flex-1 min-h-0 overflow-y-auto"
      />
      
      <Footer />
    </div>
  </Router>
);
}

export default App;
