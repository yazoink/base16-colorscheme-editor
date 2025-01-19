<!DOCTYPE html>
<?php require "includes/functions.php"; ?>
<html>
  <head>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <meta name='author' content='yazoink'>
    <title>Base16 Colorscheme Editor</title>
    <link rel='stylesheet' href='static/css/style.css'>
  </head>
  <body>
    <header class='title'>
      <h1 class='base13'>Base16 Colorscheme Editor</h1>
    </header>
    <div class='left border'>
      <div class='center'><?php print_color_row(2, 8); ?></div>
      <p class='base3 center'><i>(Click on the colors to change them)</i></p>
      <p>This website is a simple <a href='https://github.com/chriskempson/base16' target='_blank' class='base13'>Base16 colorscheme</a> editor inspired by <a href='https://terminal.sexy' target='_blank' class='base13'>terminal.sexy</a> and created by <a href='https://yazo.ink' target='_blank' class='base13'>yazoink</a>.</p>
    </div>
    <div class='right border'>
      <div class='example-code'>
        <pre><code>
  <span class='base13'>#include</span> <span class='base11'>&lt;stdio.h&gt;</span>
  <span class='base13'>#include</span> <span class='base11'>&lt;stdlib.h&gt;</span>
  <span class='base13'>#include</span> <span class='base11'>&lt;string.h&gt;</span>

  <span class='base14'>typedef struct</span> {
    <span class='base10'>int</span> some_integer<span class='base15'>;</span>
    <span class='base10'>char</span> *some_string<span class='base15'>;</span>
  } <span class='base10'>some_struct</span><span class='base15'>;</span>

  <span class='base10'>some_struct</span> <span class='base13'>init_struct</span>(<span class='base10'>int</span> some_integer<span class='base15'>,</span> <span class='base10'>char</span> *some_string)<span class='base15'>;</span>

  <span class='base10'>int</span> <span class='base13'>main</span>(<span class='base10'>int</span> argc<span class='base15'>,</span> <span class='base10'>char</span> **argv) {
    <span class='base13'>printf</span>(<span class='base11'>"This is an example, idk what to write here...</span><span class='base12'>\n</span><span class='base11'>"</span>)<span class='base15'>;</span>

    <span class='base3'>// Printing commandline arguments</span>
    <span class='base14'>for</span> (<span class='base10'>int</span> <span class='base8'>i</span> = <span class='base9'>1</span><span class='base15'>;</span> <span class='base8'>i</span> &lt; argc<span class='base15'>;</span> <span class='base8'>i</span>++) {
      <span class='base13'>printf</span>(<span class='base11'>"</span><span class='base8'>%s</span><span class='base12'>\n</span><span class='base11'>"</span><span class='base15'>,</span> argv[<span class='base8'>i</span>])<span class='base15'>;</span>
    }

    <span class='base3'>// Creating struct</span>
    <span class='base10'>some_struct</span> <span class='base8'>s</span> = <span class='base13'>init_struct</span>(<span class='base9'>69</span><span class='base15'>,</span> <span class='base11'>"I haven't written C in so long damn"</span>);
    <span class='base13'>printf</span>(<span class='base11'>"some_integer: </span><span class='base8'>%d</span><span class='base12'>\n</span>some_string: <span class='base8'>%s</span><span class='base12'>\n</span><span class='base11'>"</span><span class='base15'>,</span> <span class='base8'>s</span>.some_integer<span class='base15'>,</span> <span class='base8'>s</span>.some_string)<span class='base15'>;</span>
    <span class='base13'>free</span>(<span class='base8'>s</span>.some_string)<span class='base15'>;</span>
  }

  <span class='base10'>some_struct</span> <span class='base13'>init_struct</span>(<span class='base10'>int</span> some_integer, <span class='base10'>char</span> *some_string) {
    <span class='base10'>some_struct</span> <span class='base8'>s</span><span class='base15'>;</span>

    <span class='base8'>s</span>.some_integer = some_integer<span class='base15'>;</span>
    <span class='base8'>s</span>.some_string = <span class='base13'>strdup</span>(some_string)<span class='base15'>;</span>

    <span class='base14'>return</span> <span class='base8'>s</span><span class='base15'>;</span>
  }
        </code></pre>
      </div>
    </div>
    <footer class='footer'>
      <p>Created by <a class='base13' href='https://yazo.ink' target='_blank'>yazoink</a>.</p>
    </footer>
    <script src='includes/pickers.js'></script>
  </body>
</html>
