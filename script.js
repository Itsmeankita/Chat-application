const chatBox =
document.getElementById("chatBox");

const messageInput =
document.getElementById("messageInput");

const sendBtn =
document.getElementById("sendBtn");

// Send Message Function

function sendMessage(){

    const message =
    messageInput.value.trim();

    // Empty message check

    if(message === ""){
        return;
    }

    // Create User Message

    const userMessage =
    document.createElement("div");

    userMessage.classList.add(
        "message",
        "sent"
    );

    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    // Clear Input

    messageInput.value = "";

    // Scroll Down

    chatBox.scrollTop =
    chatBox.scrollHeight;

    // Auto Reply

    setTimeout(()=>{

        const replies = [

            "Nice 😄",
            "Okay 👍",
            "Awesome 🔥",
            "How are you?",
            "Great 😊",
            "Tell me more 👀"

        ];

        const randomReply =
        replies[Math.floor(
            Math.random() * replies.length
        )];

        const botMessage =
        document.createElement("div");

        botMessage.classList.add(
            "message",
            "received"
        );

        botMessage.innerText =
        randomReply;

        chatBox.appendChild(botMessage);

        // Auto Scroll

        chatBox.scrollTop =
        chatBox.scrollHeight;

    },1000);

}

// Button Click Event

sendBtn.addEventListener(
    "click",
    sendMessage
);

// Enter Key Support

messageInput.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Enter"){

            event.preventDefault();

            sendMessage();

        }

    }
);