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
    addWord: function () {
      this.words.push(this.newWord);
      this.newWord = "";
    },
    lastletter: function () {
      //this.lastletter = this.newWord.slice(-1);
      this.thelastletter = this.newWord.charAt((this.newWord.length) - 1);
      //console.log(thelastletter);
      alert(this.thelastletter);
    }
  }
});