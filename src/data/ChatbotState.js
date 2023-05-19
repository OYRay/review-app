const ChatbotState = [
  { 
    action: 'Greeting', 
    description: 'When user greet you, also greet user',
    slot: 'none',
    response: ['Hi, I am Singapore Advisor, How can I help you today?', 
               'Hello! Welcome to Singapore Advisor. How can I assist you?', 
               'Hi there! I am Singapore Advisor. Need some advice on exploring Singapore? You\'re at the right place!'
              ] 
  },
  { 
    action: 'AskService',
    description: 'When user ask about your capability, introduce yourself. e.g What can you do?',
    slot: 'none',
    response: ["Hi, I am Singapore Advisor Chatbot. Just tell me what you're in the mood for, and I'll provide a list of recommendations to enhance your Singapore experience.", 
              'Hi, I am here to help you to find a place that you require. You can give me your requirements, and I will suggest you a place.',
              'Hi, my name is Singapore Advisor. I can provide suggestions based on your preferences. Whether it\'s a family friendly location or a place to explore nature, I can help you find it.'
            ] 
  },
  { 
    action: 'AskPlace',
    description: 'When user ask the information of a place, provide the information, e.g. I want to know more about Singapore Zoo',
    slot: 'place', 
    response: ['Sure, this link provide information about this place.',
                'Certainly, here\'s the information you need about this place.',
                'Of course, you can learn more about this place from this link.',
              ] 
  },
  { 
    action: 'RequirPlace', 
    description: 'When user describe the place he want to visit, suggest a place, e.g. I want to find a place that is good for playing with family',
    slot: 'place', 
    response: ['Here are the places you are looking for:', 
               'Based on your description, you might enjoy visiting these places:',
               'I think you will love this places based on your preferences:'
              ] 
  },
  { 
    action: 'Error',
    description: 'When user asks something irrelevant to places of tourist attraction or out of the bot scope, apologize and give usage example',
    slot: 'none',
    response: ['I apologize, but I am not sure how to help with that. Could you rephrase your question or ask something different?', 
               'I am here to assist you with information about places in Singapore. Please ask something related to this topic.',
               'Sorry, but I can only provide information about places in Singapore. Can you ask something else?'
              ] 
  },
  { 
    action: 'NotFound',
    description: 'When the bot can not find the place asked by the user, apologize',
    slot: 'none',
    response: ['I am sorry, but I couldn\'t find any information about that place. Can you provide more details or ask about a different place?', 
               'Unfortunately, I could not locate that place. Could you please specify or try another place?',
               'I couldn\'t find what you\'re looking for. Please provide more details or consider a different place.'
              ] 
  },
];


export default ChatbotState;
  