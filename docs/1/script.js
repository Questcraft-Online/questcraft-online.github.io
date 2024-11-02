// code created by triggerhappy_ (questcraft.online)
const questions = [
    { 
        id: 1, 
        question: "Where is the problem?", 
        options: [
            { text: "Minecraft (Server)", next: 2 }, // path done
            { text: "Minecraft (Client)", next: null },
            { text: "Discord", next: null },
            { text: "Website", next: null },
            // code created by triggerhappy_ (questcraft.online)
            { text: "Other", next: null }
        ] 
    },
    { 
        // code created by triggerhappy_ (questcraft.online)
        id: 2, 
        question: "What is the problem with the Minecraft server?", 
        options: [
            { text: "Plugin-related", next: 3 }, // path done
            { text: "Server performance", next: 14 }, // path done
            { text: "Connection issues", next: 15 }, // path done
            { text: "Other", next: 7 } //path done
        ] 
    },
    { 
        id: 3, 
        question: "What is the specific issue with the plugin?", 
        options: [
            { text: "Doesn't start", next: 8 }, // path done
            { text: "Commands don't work", next: 11 }, // path done
            { text: "Configuration error", next: 16 }, // path done
            // code created by triggerhappy_ (questcraft.online)
            { text: "Other", next: 4 } // path done
        ]
    },
    { 
        id: 4, 
        question: "Can you identify which plugin is causing the issue?", 
        options: [// code created by triggerhappy_ (questcraft.online)
            { text: "Yes", next: 5 }, // path done
            { text: "No", next: 6 } // path done
        ] 
    },
    { 
        id: 5, 
        question: "Get online and run the command `/plugins`. What color indicates the plugin's status?", 
        options: [
            { text: "Red (not running)", next: 8 }, // path done
            { text: "Green (running)", next: 11 }, // path done
            { text: "Yellow (warning)", next: 17 }, // path done
            // code created by triggerhappy_ (questcraft.online)
            { text: "Other", next: 7 } // path done
        ] 
    },
    { 
        id: 6, 
        question: "Can you identify which plugin after reviewing the documentation linked here?", 
        link: "#mechanics",
        options: [
            { text: "Yes", next: 5 }, // path done
            { text: "No, still unsure", next: 7 } // path done
        ]
    },
    // code created by triggerhappy_ (questcraft.online)
    { 
        id: 7, 
        question: "Ask a higher rank for help or create a support ticket in #create-a-ticket.", 
        options: [
            { text: "Retry troubleshooting", next: 1 } // path done
        ]
        // code created by triggerhappy_ (questcraft.online)
    },
    { 
        id: 8, 
        question: "It’s likely an issue with the plugin's startup sequence.", 
        options: [
            { text: "How can I resolve it?", next: 9 }, // path done
            { text: "Not related to this issue", next: 3 }, // path done
            { text: "Retry troubleshooting", next: 1 } // path done // code created by triggerhappy_ (questcraft.online)
        ] 
    },
    { 
        id: 9, 
        question: "If you have permission, run `/restart` the server. Check the logs for error messages. What do you see?", 
        options: [
            { text: "... can't start, requires another plugin", next: 10 }, // path done
            // code created by triggerhappy_ (questcraft.online)
            { text: "Error ... (specific message)", next: 13 }, // path done // code created by triggerhappy_ (questcraft.online)
            { text: "No permission to restart the server", next: 7 } // path done
        ]
    },
    { 
        id: 10, 
        question: "It requires another plugin. If you can access the management page, navigate to 'Files' > 'Plugins' and add the required plugin. Then restart the server. What happened?", 
        options: [
            { text: "No permission to add plugins", next: 7 }, // path done
            { text: "Still getting an error ...", next: 22 }, // path done
            { text: "Issue resolved!", next: 1 } // path done
        ]
    },
    { 
        id: 11, 
        question: "Try executing a command and check the server log. What error message do you receive?", 
        options: [// code created by triggerhappy_ (questcraft.online)
            { text: "Unknown command", next: 12 }, // path done
            { text: "No permission", next: 23 } // path done
        ]
    },
    { 
        // code created by triggerhappy_ (questcraft.online)
        id: 12, 
        question: "Should the command be valid and functional?", 
        options: [
            { text: "No, it's an invalid command", next: 1 }, // path done
            { text: "Yes, it should work", next: 13 } //path done
        ]
    },
    { 
        id: 13, 
        question: "update/reinstall the plugin did this help?", 
        link: "#mechanics",
        options: [
            { text: "No", next: 22 }, // path done
            { text: "Yes, problem solved!", next: 1 } // path done
        ]
    },
    { 
        id: 14, 
        question: "Are you experiencing performance issues (e.g., lag, crashes)? Try checking server resource usage and restart if necessary.", 
        options: [
            { text: "No", next: 26 }, // path done
            { text: "Yes", next: 18 } // path done
        ]// code created by triggerhappy_ (questcraft.online)
    },
    { 
        id: 15, 
        question: "Are you having connection issues? Ensure your server is online and check firewall settings.", 
        options: [
            { text: "Yes", next: 18 }, // path done
            { text: "No", next: 14 } // path done
        ]
    },
    { 
        id: 16, // code created by triggerhappy_ (questcraft.online)
        question: "What specific configuration is causing the issue? Check config files for errors.", 
        options: [
            { text: "File path issue", next: 19 }, // path done
            { text: "Syntax error", next: 20 }, // path done
            { text: "Other", next: 22 }  // path done
        ]
    },
    { 
        id: 17, 
        question: "The plugin is showing a warning. Check the server logs for details. What does it say?", 
        options: [// code created by triggerhappy_ (questcraft.online)
            { text: "Requires update", next: 21 }, // path done
            { text: "Configuration warning", next: 16 }, // path done
            { text: "Other", next: 13 } // path done
        ]
    },
    { 
        id: 18, // code created by triggerhappy_ (questcraft.online)
        question: "Check the server's resource limits and optimize settings if necessary. Has this resolved the issue?", 
        options: [
            { text: "Yes, performance improved!", next: 1 }, // path done
            { text: "No, need further help", next: 25 } // path done
        ]
    },
    { 
        id: 19, 
        question: "For file path issues, ensure all paths in the config are correct and the files exist. Did this fix it?", 
        options: [
            { text: "Yes, all good now!", next: 1 }, // path done
            { text: "No, still an error", next: 13 } // path done
        ]// code created by triggerhappy_ (questcraft.online)
    },
    { 
        id: 20, 
        question: "For syntax errors, check for typos or formatting mistakes in the configuration. Did this help?", 
        options: [
            { text: "Yes, fixed!", next: 1 }, // path done
            { text: "No, still having issues", next: 13 } // path done
        ]
    },
    { 
        id: 21, // code created by triggerhappy_ (questcraft.online)
        question: "The plugin needs updating. Check for the latest version online and update it. Did this solve the problem?", 
        link: "#mechanics",
        options: [
            { text: "Yes, resolved!", next: 1 }, // path done
            { text: "No, still not working", next: 22 } // path done
        ]
    },
    { 
        id: 22, 
        question: "Look for the plugin's support group (tip use this link) Did this help?", 
        // code created by triggerhappy_ (questcraft.online)
        link: "#mechanics",
        options: [
            { text: "No", next: 7 }, // path done
            { text: "Yes, problem solved!", next: 1 } // path done
        ]
    },
    { 
        id: 23, 
        // code created by triggerhappy_ (questcraft.online)
        question: "are you supost to have permision?", 
        options: [
            { text: "No", next: 1 }, // path done
            { text: "Yes", next: 24 } // path done
        ]
    },
    { 
        id: 24, 
        // code created by triggerhappy_ (questcraft.online)
        question: "go to the luckperm editor page and look if you sould have the permision", 
        options: [
            { text: "No", next: 1 }, // path done
            { text: "Yes", next: 13 } // path done
        ]
    },
    { 
        id: 25, 
        // code created by triggerhappy_ (questcraft.online)
        question: "go to the offisial paper discord server https://discord.com/invite/papermc and ask for help, did this work?", 
        options: [
            { text: "No", next: 7 }, // path done
            { text: "Yes", next: 1 } // path done
        ]
    },
    { 
        id: 26, 
        // code created by triggerhappy_ (questcraft.online)
        question: "is it conection error with bedrock and/or console?", 
        options: [
            { text: "No", next: 7 }, // path done
            { text: "Yes", next: 27 } // path done
        ]
    },
    { 
        id: 27, 
        // code created by triggerhappy_ (questcraft.online)
        question: "it is problebly a error with geysermc", 
        options: [
            { text: "No", next: 7 }, // path done
            { text: "Yes", next: 13 } // path done
        ]
    },
];


// Function to render questions
function renderQuestion(questionId) {
    const questionData = questions.find(q => q.id === questionId);
    const container = document.getElementById('question-container');
    // code created by triggerhappy_ (questcraft.online)
    if (questionData) {
        container.innerHTML = `<h3>${questionData.question}</h3>`;
        
        questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.onclick = () => {
                if (option.next) {
                    renderQuestion(option.next);
                } else {
                    container.innerHTML = "<h3>Thank you for your response!</h3>";
                }
            };
            container.appendChild(button);
        });
    }  // code created by triggerhappy_ (questcraft.online)
    if (questionData.link) {
        const link = document.createElement("a"); // Specify "a" for anchor tag
        link.href = questionData.link;
        link.textContent = "Click this link";
        container.appendChild(link);
    }
}

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

renderQuestion(1); // Start with the first question
// code created by triggerhappy_ (questcraft.online)