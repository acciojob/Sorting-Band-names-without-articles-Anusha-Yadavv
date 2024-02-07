//your code here
let bandNames = ['The Beatles', 'Nirvana', 'Led Zeppelin', 'The Rolling Stones', 'Pink Floyd', 'Queen'];

  function sortBandNames(names) {
      // Function to remove articles from band names
      function removeArticle(name) {
          return name.replace(/^(a|an|the)\s+/i, '');
      }

      // Sorting the band names without articles
      names.sort((a, b) => {
          let nameA = removeArticle(a).toLowerCase();
          let nameB = removeArticle(b).toLowerCase();
          return nameA.localeCompare(nameB);
      });

      // Generating the list elements
      let listItems = names.map(name => `<li>${name}</li>`).join('');

      // Adding the list items to the ul element
      document.getElementById('bands').innerHTML = listItems;
  }

  sortBandNames(bandNames);
