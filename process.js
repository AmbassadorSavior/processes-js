console.log("===== NODE.JS PROCESS OPERATIONS =====");

// 1. Process ID
console.log("1. Process ID:", process.pid);

// 2. Parent Process ID
console.log("2. Parent Process ID:", process.ppid);

// 3. Node.js Version
console.log("3. Node Version:", process.version);

// 4. Node.js Versions
console.log("4. Node Versions:", process.versions);

// 5. Operating System Platform
console.log("5. Platform:", process.platform);

// 6. Architecture
console.log("6. Architecture:", process.arch);

// 7. Current Working Directory
console.log("7. Current Directory:", process.cwd());

// 8. Process Uptime
console.log("8. Uptime:", process.uptime(), "seconds");

// 9. Memory Usage
console.log("9. Memory Usage:", process.memoryUsage());

// 10. CPU Usage
console.log("10. CPU Usage:", process.cpuUsage());

// 11. Environment Variables
console.log("11. Environment:", process.env.NODE_ENV);

// 12. Process Arguments
console.log("12. Arguments:", process.argv);

// 13. Next Tick
process.nextTick(() => {
    console.log("13. Next Tick executed");
});

// 14. Process ID using process.pid
console.log("14. Current PID:", process.pid);

// 15. Process Title
console.log("15. Process Title:", process.title);

// 16. Process Exit Code
console.log("16. Exit Code:", process.exitCode);

// 17. Process Event Listener
process.on("beforeExit", (code) => {
    console.log("17. Before Exit Event:", code);
});

// 18. Set Exit Code
process.exitCode = 0;

console.log("===== END OF PROCESS OPERATIONS =====");