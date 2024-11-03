const questions = [
    {
        id: 1,
        question: "Hello, What issue are you experiencing?",
        options: [
            { keywords: ["lag", "lagging", "performance", "slow"], nextQuestionId: 2 },
            { keywords: ["player count", "players", "count", ], nextQuestionId: 9 },
            { keywords: ["plugins"], nextQuestionId: null },
            { keywords: ["error", "message", "crash"], nextQuestionId: null },
            { keywords: ["gameplay", "feature", "bug"], nextQuestionId: null },
            { keywords: ["placeholder", "%", "%%" ], nextQuestionId: 10 },
            { keywords: ["hello", "hi", "sigma" ], nextQuestionId: 1 }, // path done // code created by minecraft name:triggerhappy_ (questcraft.online)
            { keywords: ["i dont know how to create a land" ], nextQuestionId: 14 },
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
            { keywords: ["yes i did", "not working", "yes", "yes i checked"], nextQuestionId: 11 },
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
    {
        id: 14,
        question: "Are you currently on the Questcraft server ('questcraft.online'), another server with the Lands plugin, or a different Minecraft server?",
        options: [
            { keywords: ["im on questcraft.online", "questcraft.online", "questcraft", "questcraft online", "online"], nextQuestionId: 15 },
            { keywords: ["nvm", "worked"], nextQuestionId: 1 }, // path done
        ]
    },
    {
        id: 15,
        question: "you can try '/land create [name]' replace [name] with the name for your land and '/claim' to claim chunks",
        options: [
            { keywords: ["im on questcraft.online", "questcraft.online", "questcraft", "questcraft online", "online"], nextQuestionId: 15 },
            { keywords: ["nvm", "worked", "yes"], nextQuestionId: 1 }, // path done
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