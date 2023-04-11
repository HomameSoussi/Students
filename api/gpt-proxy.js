const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const { prompt } = req.body;
  const openaiApiKey = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      n: 1,
      max_tokens: 300,
      stop: null,
    }),
  });

  const data = await response.json();
  res.status(200).json({ summary: data.choices[0].text });
};
