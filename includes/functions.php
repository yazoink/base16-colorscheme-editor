<?php
function print_color_row($rows, $cols) {
  $num = 0;
  for ($i = 0; $i < $rows; $i++) {
    for ($j = 0; $j < $cols; $j++) {
      echo "<input type='color' id='base{$num}' class='base16-color' value='#000000'>";
      $num++;
    }
    echo "<br>";
  }
}

function json_file_to_array($path) {
  $json_string = file_get_contents($path);
  return json_decode($json_string, true);
}
?>
