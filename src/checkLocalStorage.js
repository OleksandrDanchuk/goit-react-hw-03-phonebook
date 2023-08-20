export function getLocalStorage(key) {
  try {
    const contacts = localStorage.getItem(key);
    return contacts === null ? undefined : JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
}

export function saveLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}
