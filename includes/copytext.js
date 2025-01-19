function copyText() {
  const textarea = document.getElementById('output');
  navigator.clipboard.writeText(textarea.value);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
}
