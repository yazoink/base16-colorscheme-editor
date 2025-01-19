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
?>
