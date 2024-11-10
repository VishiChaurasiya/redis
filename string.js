const client = require("./client");

async function init() {
  await client.set("user:1", "John Doe");
  await client.expire("user:1", 100);
  const result = await client.get("user:1");
  console.log("Result -> ", result);
}

init();
