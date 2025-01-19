function recolorAll(arr, color) {
  arr.forEach(elem => {
    elem.style.color = color;
  });
}

function recolorBorders(borders, color) {
  borders.forEach(border => {
    border.style.border = '2px solid ' + color;
  });
}

fetch('../static/json/schemes.json')
  .then(response => response.json())
  .then(schemes => {
    document.body.style.backgroundColor = schemes["everblush"][0];
    document.body.style.color = schemes["everblush"][5];
    let borderColor = schemes['everblush'][2];
    let borderHoverColor = schemes['everblush'][13];
    let borders = document.querySelectorAll('.border');
    recolorBorders(borders, borderColor);

    borders.forEach(border => {
      border.addEventListener('mouseover', () => {
        border.style.border = '2px solid ' + borderHoverColor;
      });

      border.addEventListener('mouseout', () => {
        border.style.border = '2px solid ' + borderColor;
      });
    });

    let pickers = document.querySelectorAll('[id^="base"]');

    pickers.forEach((picker, index) => {
      picker.value = schemes["everblush"][index];

      let highlights = document.querySelectorAll('.' + picker.id);
      recolorAll(highlights, picker.value);

      if (picker.id == 'base0') {
        picker.addEventListener('input', function(event) {
          document.body.style.backgroundColor = event.target.value;
        });
      } else if (picker.id == 'base5') {
        picker.addEventListener('input', function(event) {
          document.body.style.color = event.target.value;
        });
      } else if (picker.id == 'base2') {
        picker.addEventListener('input', function(event) {
          borderColor = event.target.value;
          recolorBorders(borders, borderColor);
        });
      } else if (picker.id == 'base13') {
        picker.addEventListener('input', function(event) {
          borderHoverColor = event.target.value;
          recolorAll(highlights, event.target.value);
        });
      } else {
        picker.addEventListener('input', function(event) {
          recolorAll(highlights, event.target.value);
        });
      }
    });
  })
  .catch(error => console.error('Error:', error));
