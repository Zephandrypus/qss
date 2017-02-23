var defaultArray = [
	"https://www.quora.com/topic/Technical-Analysis",
	"https://www.quora.com/topic/Stock-Trading-2",
	"https://www.quora.com/topic/Algorithmic-Trading",
	"https://www.quora.com/topic/High-Frequency-Trading",
	"https://www.quora.com/topic/Stock-Markets-2",
	"https://www.quora.com/topic/Investing-in-the-Stock-Market-1",
	"https://www.quora.com/topic/Investing"
];

function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    quora: document.querySelector("#links").value.split('\n')
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#links").value = result.quora || defaultArray.join("\n");
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("color");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);