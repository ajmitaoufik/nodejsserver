const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Taoufik\n");
  res.write("ajmi\n");
  res.write(req.url + "\n");
  if (req.url == "/home") {
    res.write("home\n");
  } else {
    res.write("other home\n");
  }
  res.end("done");
});
server.listen(5000, () => {
  console.log("Server is runnig");
});
