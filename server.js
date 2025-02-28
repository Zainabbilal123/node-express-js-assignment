const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("Requested URL:", req.url);
    if (req.url === "/create-file") {
        fs.writeFile("data.txt", "This is a sample text file.", (err) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error creating file");
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("File created successfully");
            }
        });

    } else if (req.url === "/read-file") {
        fs.readFile("data.txt", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error reading file");
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(data);
            }
        });

    } else if (req.url === "/append-file") {
        fs.appendFile("data.txt", "\nNew content added!", (err) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error appending file");
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Content appended successfully");
            }
        });

    } else if (req.url === "/delete-file") {
        fs.unlink("data.txt", (err) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error deleting file");
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("File deleted successfully");
            }
        });

    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
