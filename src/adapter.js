export function getBestSellers() {
  console.log('getBestSellers');
  const url = 'https://api.nytimes.com/svc/books/v3/lists/overview.json'
  const apiKey = '51b3ad4766fd48239a1a0d28d35f0814'
  return fetch(`${url}?api-key=${apiKey}`).then(r => r.json()).then(data => console.log(data.results.lists));
};
