function debug(value) {
  var $debug = document.getElementById('debug');
  $debug.innerHTML = `<pre><code>${value}</code></pre>`;
}