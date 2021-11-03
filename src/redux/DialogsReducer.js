const initialState = [
    {
        id: 1, name: 'Karina', last_message: "Nice! So, what about you?", all_messages: [
            {
                author: 'Artyom',
                text_message: "Hi! How are you?",
                timestamp: Date.now()
            },
            {
                author: 'Karina',
                text_message: "Nice! So, what about you?",
                timestamp: Date.now()
            }
        ]
    },
    {
        id: 2, name: "Aleksei", last_message: "Good morning, friend!", all_messages: [
            {
                author: 'Artyom',
                text_message: "Hi! WOOOW!!!",
                timestamp: Date.now()
            },
            {
                author: 'Aleksei',
                text_message: "Good morning, friend!",
                timestamp: Date.now()
            }
        ]
    },
    {
        id: 3, name: "Alena", last_message: "Hello!", all_messages: [
            {
                author: 'Artyom',
                text_message: "Greet!",
                timestamp: Date.now()
            },
            {
                author: 'Alena',
                text_message: "Hello!",
                timestamp: Date.now()
            }
        ]
    },
]

export const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            for (let item of state) {
                if (item.id === action.activeID) {
                    item.all_messages.push({author: action.author, text_message: action.text_message, timestamp: Date.now()})
                }
            }
            
            return state
        default: 
            return state
    }
}