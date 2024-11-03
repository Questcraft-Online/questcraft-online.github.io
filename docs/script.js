const questions = [
    {
        id: 1,
        question: "What issue are you experiencing?",
        options: [
            { keywords: ["lag", "lagging", "performance", "slow"], nextQuestionId: 2 },
            { keywords: ["player count", "players", "count", ], nextQuestionId: 9 },
            { keywords: ["plugins"], nextQuestionId: null },
            { keywords: ["error", "message", "crash"], nextQuestionId: null },
            { keywords: ["gameplay", "feature", "bug"], nextQuestionId: null },
            { keywords: ["placeholder", "%", "%%" ], nextQuestionId: 10 },
        ]
    },
    {
        id: 2,
        question: "Is the lag occurring for all players or just for you?",
        options: [
            { keywords: ["all", "everyone", "everyone is lagging"], nextQuestionId: 3 },
            { keywords: ["just me", "myself", "only me", "me", "I"], nextQuestionId: null },
        ]
    },
    {
        id: 3,
        question: "Are there any recent changes to the server, such as new plugins or a higher player count?",
        options: [
            { keywords: ["no", "unchanged", "nothing"], nextQuestionId: 4 },
            { keywords: ["yes"], nextQuestionId: 8 },
            { keywords: ["player count", "players", "count", "online", "amount", "player", "player's", "playercount"], nextQuestionId: 9 }
        ]
    },
    {
        id: 4,
        question: "are ther any problems with your memorie, storage or cpu?",
        options: [
            { keywords: ["no", "nothing"], nextQuestionId: 5 },
            { keywords: ["yes"], nextQuestionId: 13 }
        ]
    },
    {
        id: 5,
        question: "are there any problems with your entety count? or is it rily high?",
        options: [
            { keywords: ["yes", "high", "defenedly"], nextQuestionId: 6 },
            { keywords: ["how do i check", "check", "how do i see", "where", "?"], nextQuestionId: null },
            { keywords: [ ], nextQuestionId: null }
        ]
    },
    {
        id: 6,
        question: "you likly have a problem with to many enteties in your server this can couse a lot of lag and server recorces its recomended to take a look at that",
        options: [
            { keywords: ["yes", "high", "defenedly", "where" ], nextQuestionId: 7 },
            { keywords: [ ], nextQuestionId: null }
        ]
    },
    {
        id: 7,
        question: "are you using any multievers plugins? or plugins that allow more worlds?",
        options: [
            { keywords: ["yes", "" ], nextQuestionId: 8 },
            { keywords: [ ], nextQuestionId: null }
        ]
    },
    {
        id: 8,
        question: "what changed?",
        options: [
            { keywords: ["player count", "players", "count", "online", "amount"], nextQuestionId: 9 },
            { keywords: [ ], nextQuestionId: null }
        ]
    },
    {
        id: 9,
        question: "the player amount is cousing lag its recomended to upgrade your server recorces or set the player limit lower",
        options: [
            { keywords: ["oke", "thanks", "i will try", "reset", "done", "worked"], nextQuestionId: 1 }, // path done
            { keywords: [ ], nextQuestionId: null }
        ]
    },
    {
        id: 10,
        question: "It seams like a problem with placeholder api, did you check if you used the corect placeholders? list: https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders",
        options: [
            { keywords: ["yes but its still not working", "yes i did", "not working", "yes", "yes i checked"], nextQuestionId: 11 },
            { keywords: ["worked!"], nextQuestionId: 1 }, // path done
            { keywords: ["yes but its still not working"], nextQuestionId: 12 },
        ]
    },
    {
        id: 11,
        question: "did it work?",
        options: [
            { keywords: ["no",], nextQuestionId: 12 },
            { keywords: ["worked"], nextQuestionId: 1 }, // path done
        ]
    },
    {
        id: 12,
        question: "try updating and or reinstalling the plugin, did that work?",
        options: [
            { keywords: ["no",], nextQuestionId: 12 },
            { keywords: ["worked"], nextQuestionId: 1 }, // path done
        ]
    },
    {
        id: 13,
        question: "did anything happen that could couse a lag spike? (many tnt or lag mercien)",
        options: [
            { keywords: ["no"], nextQuestionId: null },
            { keywords: ["nvm", "worked"], nextQuestionId: 1 }, // path done
            { keywords: ["yes", "tnt", "lag"], nextQuestionId: null },
        ]
    },
];

let currentQuestion = questions[0];
const questionDisplay = document.getElementById("questionDisplay");

// Function to display questions
function displayQuestion(text) {
    const questionElement = document.createElement("p");
    questionElement.innerHTML = `<strong>Bot:</strong> ${text}`;
    questionDisplay.appendChild(questionElement);
    questionDisplay.scrollTop = questionDisplay.scrollHeight; // Scroll to the bottom
}

// Function to handle user's response and find the next question based on keywords
function handleResponse() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();

    if (!userInput) return;

    // Display user's message
    const userElement = document.createElement("p");
    userElement.innerHTML = `<strong>You:</strong> ${userInput}`;
    questionDisplay.appendChild(userElement);

    // Find the next question based on keywords
    let foundOption = null;
    currentQuestion.options.forEach(option => {
        option.keywords.forEach(keyword => {
            if (userInput.includes(keyword)) {
                foundOption = option;
            }
        });
    });

    if (foundOption) {
        if (foundOption.nextQuestionId !== null) {
            currentQuestion = questions.find(q => q.id === foundOption.nextQuestionId);
            displayQuestion(currentQuestion.question);
        } else if (foundOption.link) {
            displayQuestion(`You can find more information here: <a href="${foundOption.link}" target="_blank">${foundOption.link}</a>`);
        }
    } else {
        displayQuestion("I'm sorry, I didn't understand that. Could you try that again in other words?");
    }

    // Clear input field
    document.getElementById("userInput").value = "";
}

// Initialize the first question and set up event listener
displayQuestion(currentQuestion.question);
document.getElementById("submitButton").addEventListener("click", handleResponse);
document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleResponse();
    }
});
