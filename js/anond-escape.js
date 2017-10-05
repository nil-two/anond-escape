(function() {
  function escapeDiaryText(text) {
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

  var app = new Vue({
    el: "#app",
    data: {
      text: "",
    },
    computed: {
      escaped_text: function() {
        return escapeDiaryText(this.text);
      },
    },
  });
})();
