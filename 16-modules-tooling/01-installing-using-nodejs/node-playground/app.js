async function getUser() {
  const response = await fetch("https://api.github.com/users/AzizRakhim");
  const data = await response.json();
  console.log(data);
}

getUser();
