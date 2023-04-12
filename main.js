const form = document.getElementById('summary-form');
const input = document.getElementById('book-content');
const output = document.getElementById('book-summary');
const openai = require('openai');

openai.api_key = process.env.OPENAI_API_KEY;
openai.organization = process.env.OPENAI_ORGANIZATION;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const bookContent = input.value.trim();

  if (!bookContent) {
    output.innerText = 'Please enter book name.';
    return;
  }

  // const response = await fetch('/api/gpt-proxy', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     prompt: `Write a thorough yet concise summary of **${bookContent}**. Concentrate on only the most important takeaways and primary points from the book that together will give me a solid overview and understanding of the book and its topic.`,
  //   })
  // });
  
    const result = await openai.complete({
      engine: 'text-davinci-002',
      prompt,
      max_tokens: 1024,
      n: 1,
      stop: ['\n']
    });
    console.log(result);
    //res.status(200).send(result.choices[0].text);
  
  // if (!response.ok) {
  //   output.innerText = 'An error occurred while processing your request. Please try again later.';
  //   console.error(response);
  //   return;
  // }

  // const summary = await response.text();
  // if (summary) {
  //   output.innerText = summary;
  // } else {
  //   output.innerText = 'Sorry, we could not generate a summary for this text.';
  // }
});
