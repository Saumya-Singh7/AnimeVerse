async function searchCharacter() {
  const query = document.getElementById("searchInput").value;
  const response = await fetch(`https://api.jikan.moe/v4/characters?q=${query}`);
  const data = await response.json();
  
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // clear old results
  
  data.data.forEach(character => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.images.jpg.image_url}" width="150">
      <p>${character.about || "No description available."}</p>
      <button onclick="makeVow('${character.name}')">Make a Vow</button>
    `;
    resultsDiv.appendChild(card);
  });
}
