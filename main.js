const form = document.querySelector('form');
const input = document.querySelector('textarea');
const output = document.querySelector('#output');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = { prompt: input.value };
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  };
  const res = await fetch('/api/gpt-proxy', options);
  const text = await res.text();
  output.innerText = text;
});
