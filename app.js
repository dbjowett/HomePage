var clipboard = new ClipboardJS('.copyEmail');

clipboard.on('success', (e) => {
  e.trigger.innerHTML = 'Copied!';
  setTimeout(() => {
    e.trigger.innerHTML = 'Copy Email';
  }, 1000);
  e.clearSelection();
});
