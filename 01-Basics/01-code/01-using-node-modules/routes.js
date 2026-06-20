const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Name</title></head>");
    res.write("<body><form action='/submit' method='POST'>");
    res.write('<label for="name">Name:</label>');
    res.write('<input type="text" id="name" name="name">');
    res.write('<button type="submit">Submit</button>');
    res.write("</form></body>");
    res.write("</html>");
    return res.end();
  }

  // Handle form submission
  if (url === "/submit" && req.method === "POST") {
    // Collect the data chunks from the request body
    const body = [];
    req.on("data", (chunk) => {
      //   console.log(chunk);
      body.push(chunk);
    });

    // Listen for the end of the request to process the data
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      //   console.log(parsedBody);
      const name = parsedBody.split("=")[1];
      fs.writeFile("name.txt", `Name submitted: ${name}`, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        }
        // response should be sent after the file is written to ensure the client receives a response
        res.statusCode = 302; // Redirect status code
        res.setHeader("Location", "/"); // Redirect to the root URL
        return res.end();
      });
    });
    return;
  }

  // Set response headers and body
  // This code will run before the form submission is processed,
  // because the form submission is handled asynchronously
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Server</title></head>");
  res.write("<body><h1>Hello, World!</h1></body>");
  res.write("</html>");
  res.statusCode = 200;
  res.end();
};

module.exports = requestHandler;
