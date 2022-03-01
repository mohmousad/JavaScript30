const cities = [];
const govs = [];

fetch("./egypt-cities.json")
  .then((res) => res.json())
  .then((data) => cities.push(...data));

fetch("./egypt-govs.json")
  .then((res) => res.json())
  .then((data) => govs.push(...data));

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("input", function (e) {
  const newArray = findMatches(e.target.value, cities);

  let newHTML = [];

  if (!e.target.value) {
    newHTML = `<li>Search for Egypt Cities Names</li>`;
  } else {
    newHTML = newArray
      .map((city) => {
        return `
          <li>
          <span class="name">${city.cityName}</span>
          <span>${city.govName}</span>
          </li>
          `;
      })
      .join("");
  }
  suggestions.innerHTML = newHTML;
});

function findMatches(wordToMatch, cities) {
  return cities
    .filter((city) => {
      return city.city_name_en.toLowerCase().includes(wordToMatch);
    })
    .map((city) => {
      return {
        cityName: city.city_name_en,
        govName: govs.find((gov) => gov.id === city.governorate_id).governorate_name_en,
      };
    });
}
