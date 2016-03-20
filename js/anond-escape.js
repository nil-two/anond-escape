(function() {
  function escape(text) {
    return text
      .replace(/&/g, "&#x26;")
      .replace(/</g, "&#x3c;")
      .replace(/>/g, "&#x3e;")
      .replace(/&#x3c;!--/g, "<!--")
      .replace(/--&#x3e;/g, "-->")
      .replace(/&#x3c;&#x3c;/g, "<<")
      .replace(/&#x3e;&#x3e;/g, ">>")
      .replace(/&#x3e;\|/g, ">|")
      .replace(/\|&#x3c;/g, "|<")
      .replace(/>\|([\d\D]*?)\|</g, function(_, pre) {
        var escaped = pre
          .replace(/<!--/g, "&#x3c;!--")
          .replace(/-->/g, "--&#x3e;")
          .replace(/<</g, "&#x3c;&#x3c;")
          .replace(/>>/g, "&#x3e;&#x3e;")
          ;
        return [">|", escaped, "|<"].join("");
      })
      ;
  }

  function unescape(text) {
    return text
      .replace(/&#x26;/g, "&")
      .replace(/&#x3c;/g, "<")
      .replace(/&#x3e;/g, ">")
      ;
  }

  document.getElementById("escape").addEventListener("click", function() {
    var src = document.getElementById("source").value;
    var dst = escape(src);
    document.getElementById("destination").value = dst;
  });

  document.getElementById("unescape").addEventListener("click", function() {
    var src = document.getElementById("destination").value;
    var dst = unescape(src);
    document.getElementById("source").value = dst;
  });
})();
