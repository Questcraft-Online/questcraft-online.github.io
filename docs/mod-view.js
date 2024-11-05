const questions = [
    {
        id: 1,
        question: "What issue are you experiencing?",
        options: [
            { keywords: ["lag", "lagging", "performance", "slow"], nextQuestionId: 2 },
            { keywords: ["player count", "players", "count"], nextQuestionId: 9 },
            { keywords: ["plugins"], nextQuestionId: 14 },
            { keywords: ["error", "message", "crash"], nextQuestionId: 15 },
            { keywords: ["gameplay", "feature", "bug"], nextQuestionId: 16 },
            { keywords: ["placeholder", "%", "%%"], nextQuestionId: 10 },
        ]
    },
    {
        id: 2,
        question: "Is the lag occurring for all players or just for you?",
        options: [
            { keywords: ["all", "everyone"], nextQuestionId: 3 },
            { keywords: ["just me", "only me"], nextQuestionId: 17 },
        ]
    },
    {
        id: 3,
        question: "Are there any recent changes to the server, such as new plugins or a higher player count?",
        options: [
            { keywords: ["no", "unchanged", "nothing"], nextQuestionId: 4 },
            { keywords: ["yes"], nextQuestionId: 8 },
        ]
    },
    {
        id: 4,
        question: "Are there any problems with your memory, storage, or CPU?",
        options: [
            { keywords: ["no"], nextQuestionId: 5 },
            { keywords: ["yes"], nextQuestionId: 13 }
        ]
    },
    {
        id: 5,
        question: "Are there any problems with your entity count, or is it really high?",
        options: [
            { keywords: ["yes", "high", "definitely"], nextQuestionId: 6 },
            { keywords: ["how do I check", "check"], nextQuestionId: 18 }
        ]
    },
    {
        id: 6,
        question: "It seems there might be too many entities, which can cause lag. Have you considered reducing the entity count?",
        options: [
            { keywords: ["yes"], nextQuestionId: 7 },
            { keywords: ["how"], nextQuestionId: 19 }
        ]
    },
    {
        id: 7,
        question: "Are you using any plugins for multiple worlds, like Multiverse?",
        options: [
            { keywords: ["yes"], nextQuestionId: 8 },
            { keywords: ["no"], nextQuestionId: 20 }
        ]
    },
    {
        id: 8,
        question: "What changed?",
        options: [
            { keywords: ["player count"], nextQuestionId: 9 },
            { keywords: ["plugin"], nextQuestionId: 21 }
        ]
    },
    {
        id: 9,
        question: "High player counts can strain server resources. You might need to upgrade or lower the player limit.",
        options: [
            { keywords: ["okay", "thanks"], nextQuestionId: 1 }
        ]
    },
    {
        id: 10,
        question: "This could be a PlaceholderAPI issue. Have you checked if you’re using the correct placeholders?",
        options: [
            { keywords: ["yes", "checked"], nextQuestionId: 11 },
            { keywords: ["worked"], nextQuestionId: 1 }
        ]
    },
    {
        id: 11,
        question: "Did it work?",
        options: [
            { keywords: ["no"], nextQuestionId: 12 },
            { keywords: ["worked"], nextQuestionId: 1 }
        ]
    },
    {
        id: 12,
        question: "Try updating or reinstalling the plugin. Did that help?",
        options: [
            { keywords: ["no"], nextQuestionId: null },
            { keywords: ["worked"], nextQuestionId: 1 }
        ]
    },
    {
        id: 13,
        question: "Did anything happen that could cause a lag spike (like many TNT explosions)?",
        options: [
            { keywords: ["no"], nextQuestionId: null },
            { keywords: ["yes"], nextQuestionId: 22 }
        ]
    },
    {
        id: 14,
        question: "Are all plugins up-to-date and compatible with your server version?",
        options: [
            { keywords: ["yes"], nextQuestionId: 23 },
            { keywords: ["no"], nextQuestionId: 24 }
        ]
    },
    {
        id: 15,
        question: "What type of error or crash are you experiencing?",
        options: [
            { keywords: ["plugin"], nextQuestionId: 25 },
            { keywords: ["console"], nextQuestionId: 26 }
        ]
    },
    {
        id: 16,
        question: "What feature or gameplay aspect is causing issues?",
        options: [
            { keywords: ["quest", "objective"], nextQuestionId: 27 },
            { keywords: ["combat", "PVP"], nextQuestionId: 28 }
        ]
    },
    {
        id: 17,
        question: "If the lag is only affecting you, it might be a connection issue. Have you tried testing your network?",
        options: [
            { keywords: ["yes"], nextQuestionId: null },
            { keywords: ["no"], nextQuestionId: 29 }
        ]
    },
    {
        id: 18,
        question: "You can use commands or plugins to monitor the entity count. Would you like more information on these tools?",
        options: [
            { keywords: ["yes"], nextQuestionId: 30 },
            { keywords: ["no"], nextQuestionId: null }
        ]
    },
    {
        id: 19,
        question: "Consider using a plugin to limit entity counts or regularly clearing entities to reduce lag.",
        options: [
            { keywords: ["okay", "thanks"], nextQuestionId: 1 }
        ]
    },
    {
        id: 20,
        question: "Using multiple worlds can increase resource usage. You may want to limit the number of worlds if possible.",
        options: [
            { keywords: ["understood", "thanks"], nextQuestionId: 1 }
        ]
    },
    {
        id: 21,
        question: "Some plugins might be causing conflicts. Try disabling recent additions to see if performance improves.",
        options: [
            { keywords: ["did that", "worked"], nextQuestionId: 1 }
        ]
    },
    {
        id: 22,
        question: "Explosions like TNT can cause temporary lag spikes. Consider limiting TNT if this is a common problem.",
        options: [
            { keywords: ["got it", "thanks"], nextQuestionId: 1 }
        ]
    },
    {
        id: 23,
        question: "Incompatible plugins can cause issues. Try disabling plugins one by one to identify any conflicts.",
        options: [
            { keywords: ["okay"], nextQuestionId: 1 }
        ]
    },
    {
        id: 24,
        question: "Make sure plugins are updated. Old versions may not work well with newer server updates.",
        options: [
            { keywords: ["done", "thanks"], nextQuestionId: 1 }
        ]
    },
    {
        id: 25,
        question: "Does the plugin have any dependencies that need updating as well?",
        options: [
            { keywords: ["yes"], nextQuestionId: 11 },
            { keywords: ["no"], nextQuestionId: null }
        ]
    },
    {
        id: 26,
        question: "Console errors can provide more details. Could you provide the error message?",
        options: [
            { keywords: ["yes"], nextQuestionId: null },
            { keywords: ["no"], nextQuestionId: null }
        ]
    },
    {
        id: 27,
        question: "Quests can sometimes get stuck. Try resetting the quest or checking for updates to your quest plugin.",
        options: [
            { keywords: ["thanks", "okay"], nextQuestionId: 1 }
        ]
    },
    {
        id: 28,
        question: "PVP issues may be caused by settings or plugins. Have you tried adjusting PVP settings?",
        options: [
            { keywords: ["yes"], nextQuestionId: 11 },
            { keywords: ["no"], nextQuestionId: null }
        ]
    },
    {
        id: 29,
        question: "Testing your network connection could help identify if the lag is caused by a connection issue.",
        options: [
            { keywords: ["okay"], nextQuestionId: 1 }
        ]
    },
    {
        id: 30,
        question: "There are plugins and commands to monitor entities. Consider trying them for better control over entities.",
        options: [
            { keywords: ["will do", "thanks"], nextQuestionId: 1 }
        ]
    },
    {
        id: 31,
        question: "try finding the support group of the plugin (you can use the list below) did they/this help?",
        options: [
            { keywords: ["no"], nextQuestionId: 32 }
        ]
    },
    {
        id: 31,
        question: "try asking a higher rank or help from others",
        options: [
            { keywords: ["oke"], nextQuestionId: 1 }
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


// code created by triggerhappy_ (questcraft.online)
// Plugin data
const plugins = [
    { name: "Crash players", file: "PlayerCrasher-3.0.1.jar", tags: ["Crasher", "Player", "/crash", "crash"], discordLink: "https://discord.com/invite/9kZzNb53FK", downloadLink: "https://modrinth.com/plugin/playercrasher" },
    { name: "Filter chat", file: "ChatFilter.jar", tags: ["Filter", "Chat", "cursing"], discordLink: "https://discord.gg/yv3GsyDUpH", downloadLink: "https://www.spigotmc.org/resources/chatfilter-chat-signs-books-and-anvils.81652/" },
    { name: "Bedrock support", file: "Geyser-Spigot.jar", tags: ["Spigot", "Geyser", "bedrock", "bugrock"], discordLink: "https://discord.gg/GeyserMC", downloadLink: "https://geysermc.org/download" },
    { name: "Versions support auto updater", file: "AutoViaUpdater-8.5.jar", tags: ["Via", "Auto", "Updater"], downloadLink: "https://www.spigotmc.org/resources/autoviaupdater.109331/" },
    { name: "Website hoster", file: "SimpleWebsite-1.0.0.jar", tags: ["Website", "Simple", "host", "online"], discordLink: "https://discord.com/invite/JYFU5TkTRT", downloadLink: "https://www.spigotmc.org/resources/simplewebsite-free.112766/" },
    { name: "Permission", file: "LuckPerms-Bukkit-5.4.145.jar", tags: ["permission", "Luck", "/lp", "/luckperms"] },
    { name: "Online 3D map", file: "bluemap-5.4-paper.jar", tags: ["Map", "Blue", "/Blue", "website", "online"] },
    // code created by triggerhappy_ (questcraft.online)
    { name: "Server List", file: "AdvancedServerList-Paper-5.0.5.jar", tags: ["server", "list", "appearance", "paper", "plugin"] },
    { name: "Crazy Crates", file: "CrazyCrates-4.0.3.jar", tags: ["crates", "items", "crazy", "reward", "plugin"] },
    { name: "Advanced Inventory Spy", file: "AdvancedSpyInventory-2.4.6.jar", tags: ["inventory", "spy", "advanced", "plugin", "monitoring"] },
    { name: "Animated Scoreboard", file: "AnimatedScoreboard.jar", tags: ["scoreboard", "animated", "display", "plugin", "score"] },
    { name: "Auction House", file: "AuctionHouse-1.20.4-3.7.1.jar", tags: ["auction", "house", "market", "plugin", "economy", "ah", "/ah", "/sell", "sell", "/buy", "buy"] },
    { name: "Packet Events", file: "packetevents-spigot-2.5.0.jar", tags: ["packet", "events", "network"] },
    { name: "Multiverse Core", file: "multiverse-core-4.3.13.jar", tags: ["multiverse", "world", "core", "teleport", "mv", "mvc"] },
    { name: "Multiverse Inventories", file: "multiverse-inventories-4.2.7-pre.jar", tags: ["multiverse", "inventories", "world", "items", "mvi", "multiversi"] },
    { name: "Better GUI", file: "bettergui-10.2-shaded.jar", tags: ["GUI", "menu", "interface", "plugin"] },
    { name: "Discord Chat Addon", file: "InteractiveChatDiscordSrvAddon-4.2.12.0.jar", tags: ["Discord", "Chat", "integration", "addon"] },
    { name: "Floodgate", file: "floodgate-spigot.jar", tags: ["Floodgate", "bedrock", "support", "geyser", "Extensions"] },
    { name: "Void World Generator", file: "VoidWorldGenerator-1.1.4.jar", tags: ["void", "world", "generator"] },
    { name: "Via Version", file: "ViaVersion.jar", tags: ["version", "compatibility", "Via", "ViaVersion", "new"] },
    { name: "Via Backwards", file: "ViaBackwards.jar", tags: ["version", "compatibility", "Via", "Backwards", "ViaBackwards", "old"] },
    { name: "Vault", file: "Vault.jar", tags: ["economy", "permissions", "API", "money"] },
    { name: "Multiverse Portals", file: "multiverse-portals-4.2.3.jar", tags: ["multiverse", "portals", "teleport", "mvp", "multivers p"] },
    { name: "Graves", file: "AxGraves-1.14.6.jar", tags: ["graves", "death", "items", "recovery", "ax"] },
    { name: "Dynmap", file: "Dynmap-3.7-beta-7-spigot.jar", tags: ["map", "web", "dynamic", "plugin", "website", "online"] },
    { name: "Discord SRV", file: "DiscordSRV-Build-1.28.0.jar", tags: ["Discord", "chat", "srv", "integration", "bot", "/link", "voice chat", "vc", "voicechat"] },
    { name: "Essentials Spawn", file: "EssentialsXSpawn-2.21.0-dev+121-f7a8f86.jar", tags: ["spawn", "essentials", "teleport"] },
    { name: "Vulcan Plan Addon", file: "VulcanPlanAddon-v1.0.1.jar", tags: ["Vulcan", "plan", "addon", "website", "Extensions"] },
    { name: "World Guard", file: "worldguard-bukkit-7.0.11-dist.jar", tags: ["world", "guard", "protection"] },
    { name: "WorldEdit", file: "worldedit-bukkit-7.3.8.jar", tags: ["world", "edit", "//wand", "//", "world edit"] },
    { name: "Via Rewind", file: "ViaRewind.jar", tags: ["rewind", "backward", "compatibility", "old", "super old"] },
    { name: "Vivecraft Extensions", file: "Vivecraft_Spigot_Extensions.jar", tags: ["Vivecraft", "VR", "extensions"] },
    // code created by triggerhappy_ (questcraft.online)
    { name: "Interactive Chat", file: "InteractiveChat-4.2.12.0.jar", tags: ["chat", "interactive", "plugin"] },
    { name: "Via Rewind Legacy", file: "ViaRewind Legacy Support.jar", tags: ["legacy", "support", "Via", "old", "super old"] },
    { name: "Vulcan", file: "Vulcan-2.9.1.jar", tags: ["Vulcan", "protection", "cheat"] },
    { name: "Lands", file: "Lands-7.10.0.jar", tags: ["land", "claim", "protection"] },
    { name: "Voice Chat", file: "voicechat-bukkit-2.5.25.jar", tags: ["voice", "chat", "vc", "voicechat", "voice chat"] },
    { name: "Essentials", file: "EssentialsX-2.21.0-dev+121-f7a8f86.jar", tags: ["essentials", "core", "plugin", "commands"] },
    { name: "Citizens", file: "Citizens-2.0.36-b3621.jar", tags: ["NPC", "citizens", "plugin"] },
    { name: "mcMMO", file: "mcMMO.jar", tags: ["mcMMO", "skills", "RPG", "minecraft", "minecraftmmo"] },
    // code created by triggerhappy_ (questcraft.online)
    { name: "Ultra Economy", file: "UltraEconomy-2.10.1.jar", tags: ["economy", "plugin", "money"] },
    { name: "GSit", file: "GSit-1.10.0.jar", tags: ["sit", "emote", "animation", "/sit", "/crawl", "crawl"] },
    { name: "Bug Reports", file: "BugReports-0.12.4-latest.jar", tags: ["bug", "report", "issue"] },
    { name: "MC Dashboard", file: "MCDash-1.1.7.jar", tags: ["dashboard", "monitoring", "admin", "website", "online", "7867", ":7867"] },
    { name: "Plan", file: "Plan-5.6-build-2883.jar", tags: ["analytics", "plan", "data", "website", "8804", ":8804"] },
    { name: "Chest Shop", file: "ChestShop-1.1.jar", tags: ["shop", "economy", "items"] },
    { name: "Placeholder", file: "Placeholderapi", tags: ["api", "Placeholder api", "Placeholder", "%", "%%"] },
];

// Function to generate the plugin list
function generatePluginList(filteredPlugins) {
    const pluginListContainer = document.getElementById('plugin-list');
    pluginListContainer.innerHTML = ''; // Clear previous list
// code created by triggerhappy_ (questcraft.online)
    const pluginsToDisplay = filteredPlugins || plugins; // Use filtered or all plugins
    pluginsToDisplay.forEach(plugin => {
        const pluginItem = document.createElement('div');
        pluginItem.classList.add('plugin-item');

        // HTML for plugin with question mark for more info
        pluginItem.innerHTML = `
            <strong>${plugin.name}</strong>: ${plugin.file} 
            <span class="info-icon" title="More info">?</span>
            <div class="plugin-info hidden">
                Discord: <a href="${plugin.discordLink}" target="_blank">${plugin.discordLink}</a><br>
                Download: <a href="${plugin.downloadLink}" target="_blank">${plugin.downloadLink}</a>
            </div>
            ${plugin.tags.map(tag => `<span class="hidden-tags">${tag}</span>`).join('')}
        `;
        // code created by triggerhappy_ (questcraft.online)
        // Append the item to the container
        pluginListContainer.appendChild(pluginItem);

        // Event listener for info icon to show/hide more details
        const infoIcon = pluginItem.querySelector('.info-icon');
        const pluginInfo = pluginItem.querySelector('.plugin-info');
        infoIcon.addEventListener('click', () => {
            pluginInfo.classList.toggle('hidden');
        });
    });
}

// CSS for hiding and showing plugin info
const style = document.createElement('style');
style.innerHTML = `
    .plugin-info.hidden { display: none; }
    .plugin-info { margin-top: 8px; padding: 8px; background-color: #00; border-radius: 10px; }
    .info-icon { cursor: pointer; color: #007bff; margin-left: 8px; }
`;
document.head.appendChild(style);// code created by triggerhappy_ (questcraft.online)

// Function to handle search input
function filterPlugins() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filteredPlugins = plugins.filter(plugin => {
        return plugin.name.toLowerCase().includes(searchValue) || 
               plugin.tags.some(tag => tag.toLowerCase().includes(searchValue));
    });
    generatePluginList(filteredPlugins);
}
// Event listener for the search input
document.getElementById('search').addEventListener('input', filterPlugins);

// Call the function to generate the plugin list on page load
generatePluginList();