export function getBestSellers() {
  let url = `http://localhost:3001/api/v1/best-sellers`
  return fetch(url).then(r => r.json())
}

export function searchRequest(searchTerm) {
  searchTerm = searchTerm.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,'+')
  let url = `http://localhost:3001/api/v1/search/${searchTerm}`

  return fetch(url).then(r => r.json())
}

export function createUser(userObj) {
  const url = `http://localhost:3001/api/v1/users`
  const options = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userObj)
  }

  return fetch(url, options).then(r => r.json())
}

export function createShelf(shelfObj) {
  const url = `http://localhost:3001/api/v1/shelves`
  const options = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: shelfObj})
  }
  return fetch(url, options).then(r => r.json())
}

export function loginUser(userObj){
  console.log("inside loginUser in adapter.js", userObj);
  const url = `http://localhost:3001/api/v1/login`
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: JSON.stringify({user: userObj})
  }

  return fetch(url, options).then(r => r.json())
}

export function getCurrentUser(token){
  const url = `http://localhost:3001/api/v1/current_user`
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
      Authorization: token
    }
  }

  return fetch(url, options).then(r => r.json())
}
