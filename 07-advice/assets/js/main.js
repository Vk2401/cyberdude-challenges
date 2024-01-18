const quoteEl = document.querySelector("#quoteEl");
const API_URL = "https://api.adviceslip.com/advice";
const newBtn = document.querySelector("#newBtn");

async function getQuote() {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Some network error: ", error);
  }
}

async function updateQuote() {
  const newQuote = await getQuote();
  quoteEl.textContent = newQuote.slip.advice;
}

// Initial quote fetch
updateQuote();

newBtn.addEventListener("click", updateQuote);
