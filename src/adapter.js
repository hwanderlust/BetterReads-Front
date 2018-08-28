import { API_ROOT_URL, HEADERS} from './constants'

export function getBestSellers() {
  let url = `${API_ROOT_URL}/best-sellers`
  return fetch(url).then(r => r.json())
}

export function searchRequest(searchTerm) {
  // eslint-disable-next-line
  searchTerm = searchTerm.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,'+')
  let url = `${API_ROOT_URL}/search/${searchTerm}`

  return fetch(url).then(r => r.json())
}

export function createUser(userObj) {
  const url = `${API_ROOT_URL}/users`
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({user: userObj})
  }

  return fetch(url, options).then(r => r.json())
}

export function createShelf(shelfObj) {
  const url = `${API_ROOT_URL}/shelves`
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({shelf: shelfObj})
  }
  return fetch(url, options).then(r => r.json())
}

export function loginUser(userObj){
  console.log("inside loginUser in adapter.js", userObj);
  const url = `${API_ROOT_URL}/login`
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({user: userObj})
  }

  return fetch(url, options).then(r => r.json())
}

export function getCurrentUser(token){
  const url = `${API_ROOT_URL}/current_user`
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

export function getAllUsers(){
  const url = `${API_ROOT_URL}/users`
  const options = {
    method: "GET"
  }

  return fetch(url, options).then(r => r.json())
}

export function getUserShelves(id, token){
  const url = `${API_ROOT_URL}/users/${id}/shelves`
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

export function createBook(bookObj, shelfId){
  const url = `${API_ROOT_URL}/books`
  const options = {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({book: bookObj, shelf: shelfId})
  }

  return fetch(url, options).then(r => r.json())
}
