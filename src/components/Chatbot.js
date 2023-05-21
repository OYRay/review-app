import React, { useState } from 'react';
import "../App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";


import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import Features from '../data/FeatureData';
import ChatbotState from '../data/ChatbotState';
import SearchOptions from '../data/SearchOptions';
const API_KEY = "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";
const gptAPI = "https://api.openai.com/v1/completions";


const Chatbot = () => {
    const navigate  = useNavigate();

    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
    {   
        message: `Hello, welcome to Singapore Advisor, your personal assistant for discovering the best of Singapore! 

Just tell me what you're in the mood for, \
and I'll provide a list of recommendations to enhance your Singapore experience. \
Let's get started, shall we?`,
        sender: "Advisor"
    }
    ])

    const handleSelect = (value) => {
        navigate(`/result/${value}`);
      };
    
    const callGptApi = async (message) => {

        const action_prompt_text = `User's message: ${message} \
You are a bot providing the information of Singapore amusements. Select most suitable action from action list, just return the action name.\
Action list: ${ChatbotState.map(s => "action: " + s.action + " description: " + s.description + ", ")}\
`
        const gptActionType =  await fetch(
            gptAPI,
            {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                temperature:0.5,
                model:"text-davinci-003",
                prompt: action_prompt_text,
                max_tokens: 256,
            }),
            }
        ).then(response => response.json());
        
        let actionType = 'Greeting'
        if (gptActionType.choices && gptActionType.choices[0].text) {
            const gptActionText = gptActionType.choices[0].text.trim();
            
            // update action type
            actionType = gptActionText;
        }
        console.log(actionType);


        const actionObject = ChatbotState.find(obj => obj.action === actionType);
        
        // Check if the action object exists
        if (!actionObject) {
            // generate response
            const errorActionObject = ChatbotState.find(obj => obj.action === 'Error');
            let randomIndex = Math.floor(Math.random() * errorActionObject.response.length);
            const predefinedResponse =  errorActionObject.response[randomIndex];

            const newMessage = {
                message: `${predefinedResponse}`,
                sender: "Advisor",
                direction: "incoming"
            }
            // update messages
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            return
        }
        // If the slot is NaN, return a random pre-defined response
        const slot = actionObject.slot;
        if (slot === 'none') {
            let randomIndex = Math.floor(Math.random() * actionObject.response.length);
            const predefinedResponse =  actionObject.response[randomIndex];
            setTyping(false);
            const newMessage = {
                message: `${predefinedResponse}`,
                sender: "Advisor",
                direction: "incoming"
            }
            // update messages
            setMessages((prevMessages) => [...prevMessages, newMessage]);
       
            return
        } 

        if (actionType === "RequirPlace") {
            const prompt_text = 'User requirements: ' + message + 
                    " Select two places that fit requirements from list, return only two places names separated by ',',  places list" + 
                    Features.map(f => f.place + " : [" + f.features.join(', ') + "]").join(', ')
            const gptResponse =  await fetch(
                gptAPI,
                {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + API_KEY,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    temperature:0,
                    model:"text-davinci-003",
                    prompt: prompt_text,
                    max_tokens: 256,
                }),
                }
            ).then(response => response.json());
            
            if (gptResponse.choices && gptResponse.choices[0].text) {
                const gptResponseText = gptResponse.choices[0].text.trim();
                const places = gptResponseText.split(',');
                console.log(gptResponseText);
                
                setTyping(false);
                // get place name and generate response
                let randomIndex = Math.floor(Math.random() * actionObject.response.length);
                const predefinedResponse =  actionObject.response[randomIndex];
                // alert(places[0])
                const link_1 = `http://localhost:3000/result/${places[0].trim()}`
                const link_2 = `http://localhost:3000/result/${places[1].trim()}`
                // const link_1 = <Button className="searchOptionButton" size='small' onClick={() => handleSelect(places[0].trim())}>${places[0].trim()}</Button>
                // const link_2 = <Button className="searchOptionButton" size='small' onClick={() => handleSelect(places[1].trim())}>${places[1].trim()} </Button>

                const newMessage = {
                    message: `${predefinedResponse} <a href=${link_1}>${places[0].trim()}</a>,  <a href=${link_2}>${places[1].trim()}</a>.`,
                    sender: "Advisor",
                    direction: "incoming"
                }
                // update messages
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            }
        }

        if (actionType === "AskPlace") {
            const prompt_text = 'User message: ' + message + 
                    "Find the place that user is looking for from the message, return only one place name"
                    
            const gptResponse =  await fetch(
                gptAPI,
                {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + API_KEY,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    temperature:0.5,
                    model:"text-davinci-003",
                    prompt: prompt_text,
                    max_tokens: 256,
                }),
                }
            ).then(response => response.json());
            
            if (gptResponse.choices && gptResponse.choices[0].text) {
                const gptResponseText = gptResponse.choices[0].text.trim();
                console.log(gptResponseText);
                setTyping(false);
                // check 
                const place = SearchOptions.find(place => place.toLocaleLowerCase() === gptResponseText.toLocaleLowerCase());
        
                // Check if the action object exists
                if (!place) {
                    // generate response
                    const notFoundActionObject = ChatbotState.find(obj => obj.action === 'NotFound');

                    let randomIndex = Math.floor(Math.random() * notFoundActionObject.response.length);
                    const predefinedResponse =  notFoundActionObject.response[randomIndex];

                    const newMessage = {
                        message: `${predefinedResponse}`,
                        sender: "Advisor",
                        direction: "incoming"
                    }
                    // update messages
                    setMessages((prevMessages) => [...prevMessages, newMessage]);

                    return
                }

                
                // generate response
                let randomIndex = Math.floor(Math.random() * actionObject.response.length);
                const predefinedResponse =  actionObject.response[randomIndex];

                const newMessage = {
                    message: `${predefinedResponse} <a href="http://localhost:3000/result/${gptResponseText}">${gptResponseText}</a> `,
                    sender: "Advisor",
                    direction: "incoming"
                }
                // update messages
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            }
        }



    };

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }
        // update messages
        const newMessages = [...messages, newMessage]
        setMessages(newMessages)
        // process to gpt
        setTyping(true);
        await callGptApi(message);
    } 

    return (
        <div>
        
        <ChatContainer>
            <MessageList
                typingIndicator={typing ?  <TypingIndicator content="Advisor is typing" /> : null}
            >
                {messages.map((message, i) => {
                    return <Message key={i} model={message} />
                })}

            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
        </ChatContainer>
        </div>
    );
};

export default Chatbot;
