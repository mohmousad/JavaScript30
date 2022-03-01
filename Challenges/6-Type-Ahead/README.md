### 6. Egypt Cities (Type Ahead)

**Date:** 1 Mar 2022

**Description:**

- HTML page contains text search in Egypt cities and return the city and the government of the city ( Original code was to search in USA states)

- Learned about Fetch, Prespective Transformation

- Original code used regex and match method, I used includes method.

- To find the government of the city:

  - I filtered the cities array to match the search input
  - I mapped on the filtered array to attach the government name to the result cities using find method

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

**Demo:** [Here](https://mohmousad.github.io/JavaScript30/Challenges/6-Type-Ahead/)
