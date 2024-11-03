const questions = [
    { 
        id: 1, 
        question: "Where is the problem?", 
        options: [
            { keywords: ["Minecraft server"], text: "Minecraft (Server)", next: 2 }, 
            { keywords: ["Minecraft client"], text: "Minecraft (Client)", next: null },
            { keywords: ["Discord"], text: "Discord", next: null },
            { keywords: ["Website"], text: "Website", next: null },
            { keywords: ["Other"], text: "Other", next: null }
        ] 
    },
    { 
        id: 2, 
        question: "What is the problem with the Minecraft server?", 
        options: [
            { keywords: ["plugin", "plugins"], text: "Plugin-related", next: 3 },
            { keywords: ["performance", "lag"], text: "Server performance", next: 14 },
            { keywords: ["connection"], text: "Connection issues", next: 15 },
            { keywords: ["other"], text: "Other", next: 7 }
        ] 
    },
    { 
        id: 3, 
        question: "What is the specific issue with the plugin?", 
        options: [
            { keywords: ["doesn't start", "start issue"], text: "Doesn't start", next: 8 },
            { keywords: ["commands", "commands not working"], text: "Commands don't work", next: 11 },
            { keywords: ["configuration", "config error"], text: "Configuration error", next: 16 },
            { keywords: ["scoreboard", "serverlist", "tab"], text: "Something's not showing up (scoreboard, serverlist, tab)", next: 31 },
            { keywords: ["other"], text: "Other", next: 4 }
        ]
    },
    { 
        id: 4, 
        question: "Can you identify which plugin is causing the issue?", 
        options: [
            { keywords: ["yes"], text: "Yes", next: 5 },
            { keywords: ["no"], text: "No", next: 6 }
        ] 
    },
    { 
        id: 5, 
        question: "Get online and run the command `/plugins`. What color indicates the plugin's status?", 
        options: [
            { keywords: ["red", "not running"], text: "Red (not running)", next: 8 },
            { keywords: ["green", "running"], text: "Green (running)", next: 11 },
            { keywords: ["yellow", "warning"], text: "Yellow (warning)", next: 17 },
            { keywords: ["other"], text: "Other", next: 13 }
        ] 
    },
    { 
        id: 6, 
        question: "Can you identify which plugin after reviewing the documentation linked here?", 
        link: "#mechanics",
        options: [
            { keywords: ["yes"], text: "Yes", next: 5 },
            { keywords: ["no", "unsure"], text: "No, still unsure", next: 7 }
        ]
    },
    { 
        id: 7, 
        question: "Ask a higher rank for help or create a support ticket in #create-a-ticket.", 
        options: [
            { keywords: ["retry"], text: "Retry troubleshooting", next: 1 }
        ]
    },
    { 
        id: 8, 
        question: "It’s likely an issue with the plugin's startup sequence.", 
        options: [
            { keywords: ["resolve", "fix"], text: "How can I resolve it?", next: 9 },
            { keywords: ["not related"], text: "Not related to this issue", next: 3 },
            { keywords: ["retry"], text: "Retry troubleshooting", next: 1 }
        ] 
    },
    // ... Continue with the rest of the questions, adding keywords for each option
];
let currentQuestionId = 1;

function displayQuestion(questionId) {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    // Display the question text
    console.log(question.question);

    // Display each option
    question.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option.text}`);
    });

    // If there's a link associated with the question, display it
    if (question.link) {
        console.log(`Link: ${question.link}`);
    }
}

function handleResponse(userInput) {
    const question = questions.find(q => q.id === currentQuestionId);

    if (!question) {
        console.log("Error: Question not found.");
        return;
    }

    // Convert user input to lowercase for easier matching
    const input = userInput.toLowerCase();

    // Find the option that matches the input keywords
    const selectedOption = question.options.find(option => 
        option.keywords.some(keyword => input.includes(keyword))
    );

    if (selectedOption) {
        currentQuestionId = selectedOption.next;
        if (currentQuestionId) {
            displayQuestion(currentQuestionId);
        } else {
            console.log("End of troubleshooting flow. Please consult a higher rank if unresolved.");
        }
    } else {
        console.log("Sorry, I couldn't understand your response. Please try again.");
    }
}

// Initialize troubleshooting flow
displayQuestion(currentQuestionId);

// Example of user input handling
document.getElementById("submitButton").onclick = () => {
    const userInput = document.getElementById("userInput").value;
    handleResponse(userInput);
};
