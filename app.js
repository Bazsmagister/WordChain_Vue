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
    }
  }
});
