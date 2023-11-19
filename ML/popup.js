
const form = document.getElementById('news-form');


form.addEventListener('submit', async (event) => {

  event.preventDefault();


  const input = document.getElementById('news-text').value;

  try {
 
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: input}),
    });


    if (response.ok) {
 
      const prediction = (await response.json()).prediction;
      const resultDiv = document.getElementById('prediction-result');
      resultDiv.innerText = prediction === 0 ? 'The news is Real' : 'The news is Fake';
    } else {
      console.error('Request failed:', response.status);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
});
