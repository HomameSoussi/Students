const openai = require('openai');

openai.api_key = process.env.OPENAI_API_KEY;
openai.organization = process.env.OPENAI_ORGANIZATION;

module.exports = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const result = await openai.complete({
      engine: 'text-davinci-002',
      prompt,
      max_tokens: 1024,
      n: 1,
      stop: ['\n']
    });
    const summary = result.choices[0].text.trim();
    const response = {
      success: true,
      summary
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    const response = {
      success: false,
      error: 'An error occurred while processing the request'
    };
    res.status(500).json(response);
  }
};
