const REQUEST_URL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple';

export const fetchQuestions = async () => {
  return fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch(function () {
      console.log('ERROR');
    });
};

export function unescapeHtml (safe) {
  return safe.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}
