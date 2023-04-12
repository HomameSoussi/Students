const openai = require('openai');

openai.api_key = process.env.OPENAI_API_KEY;
openai.organization = process.env.OPENAI_ORGANIZATION;

module.exports = async (prompt) => {
  console.log(prompt);
  try {
    const result = await openai.complete({
      engine: 'text-davinci-002',
      prompt,
      max_tokens: 1024,
      n: 1,
      stop: ['\n']
    });
    return(result);
    //res.status(200).send(result.choices[0].text);
  } catch (error) {
    console.error('Error in OpenAI API call:', error);
    throw error
    //res.status(500).send('Error in OpenAI API call');
  }
};
