var app = new Vue({
  el: "#app",
  data: {
    newWord: "",

    title: "Wordchain",
    words: [
      "Alg",
      "Ben",
      "Col",
      "Dae",
      "Ele",
      "Fol",
      "Gor",
      "Hia",
      "Ial",
      "Jal",
      "Lac",
      "Mat",
      "Neo",
      "Osp",
      "Pan",
      "Qua",
      "Rub",
      "San",
      "Tel",
      "Una",
      "Ver",
      "Welt",
      "Xyz",
      "Ytt",
      "Zol"
    ]
  },
  methods: {
    addWord: function() {
      this.words.push(this.newWord);
      this.newWord = "";
    },
    lastletter: function() {
      //this.lastletter = this.newWord.slice(-1);
      lastletter = this.newWord.charAt(stringLength - 1);
      console.log(lastletter);
      //alert(lastletter);
    }
  }
});
