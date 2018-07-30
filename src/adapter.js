export function getBestSellers() {
  console.log('getBestSellers');
  const url = 'https://api.nytimes.com/svc/books/v3/lists/overview.json'
  const apiKey = '51b3ad4766fd48239a1a0d28d35f0814'
  return fetch(`${url}?api-key=${apiKey}`).then(r => r.json()).then(data => console.log(data.results.lists));
};

export function searchRequest(searchTerm) {
  searchTerm = searchTerm.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,'+')
  let url = `http://localhost:3001/api/v1/search/${searchTerm}`

  return fetch(url).then(r => r.json())
}

export function createUser(userObj) {
  let url = `http://localhost:3001/api/v1/users`
  // debugger
  const options = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userObj)
  }

  return fetch(url, options).then(r => r.json()).then(signup => console.log(signup))
}
