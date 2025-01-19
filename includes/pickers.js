// this code definitely sucks, idk javascript sorry

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

function writeBase16Yaml(template, colorscheme) {
  yaml = template;
  for (let key in colorscheme) {
    yaml = yaml.replace(key.toUpperCase(), colorscheme[key]);
  }
  return yaml;
}

fetch('../static/json/schemes.json')
  .then(response => response.json())
  .then(schemes => {
    colorscheme = schemes['everblush'];
    base16Template = `scheme: "My Base16 Colorscheme"
author: "Base16 Colorscheme Editor (https://base16.yazo.ink)"
base00: "BASE0"
base01: "BASE1"
base02: "BASE2"
base03: "BASE3"
base04: "BASE4"
base05: "BASE5"
base06: "BASE6"
base07: "BASE7"
base08: "BASE8"
base09: "BASE9"
base0A: "BASE10"
base0B: "BASE11"
base0C: "BASE12"
base0D: "BASE13"
base0E: "BASE14"
base0F: "BASE15"`;

    document.body.style.backgroundColor = colorscheme['base0'];
    document.body.style.color = colorscheme['base5'];
    let borders = document.querySelectorAll('.border');
    document.getElementById('output').style.backgroundColor = colorscheme['base1'];
    document.getElementById('output').style.color = colorscheme['base5'];
    recolorBorders(borders, colorscheme['base2']);

    borders.forEach(border => {
      border.addEventListener('mouseover', () => {
        border.style.border = '2px solid ' + colorscheme['base13'];
      });

      border.addEventListener('mouseout', () => {
        border.style.border = '2px solid ' + colorscheme['base2'];
      });
    });

    let pickers = document.querySelectorAll('[id^="base"]');

    pickers.forEach(picker => {
      picker.value = colorscheme[picker.id];

      let highlights = document.querySelectorAll('.' + picker.id);
      recolorAll(highlights, picker.value);
      document.getElementById('output').value = writeBase16Yaml(base16Template, colorscheme);

      switch (picker.id) {
        case 'base0':
          picker.addEventListener('input', function(event) {
            document.body.style.backgroundColor = event.target.value;
            colorscheme[picker.id] = event.target.value;
            recolorAll(highlights, event.target.value);
            document.getElementById('output').value = writeBase16Yaml(base16Template, colorscheme);
          });
          break;
        case 'base1':
          picker.addEventListener('input', function(event) {
            document.getElementById('output').style.backgroundColor = event.target.value;
            colorscheme[picker.id] = event.target.value;
            recolorAll(highlights, event.target.value);
            document.getElementById('output').value = writeBase16Yaml(base16Template, colorscheme);
          });
          break;
        case 'base2':
          picker.addEventListener('input', function(event) {
            recolorBorders(borders, event.target.value);
            colorscheme[picker.id] = event.target.value;
            recolorAll(highlights, event.target.value);
            document.getElementById('output').value = writeBase16Yaml(base16Template, colorscheme);
          });
          break;
        case 'base5':
          picker.addEventListener('input', function(event) {
            document.body.style.color = event.target.value;
            document.getElementById('output').style.color = event.target.value;
            colorscheme[picker.id] = event.target.value;
            recolorAll(highlights, event.target.value);
            document.getElementById('output').value = writeBase16Yaml(base16Template, colorscheme);
          });
          break;
        default:
          picker.addEventListener('input', function(event) {
            colorscheme[picker.id] = event.target.value;
            recolorAll(highlights, event.target.value);
            document.getElementById('output').value = writeBase16Yaml(base16Template, colorscheme);
          });
      }
    });
  })
  .catch(error => console.error('Error:', error));
