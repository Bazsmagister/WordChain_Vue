var app = new Vue({
  el: "#app",
  data: {
    newWord: "",
    title: "Wordchain",
    //props: ["thelastletter"],
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
      "Zol",
    ],
  },
  methods: {
    addWord: function () {
      this.words.push(this.newWord);
      //this.newWord = "";
      //alert the last element of the array:
      //alert(this.words[this.words.length - 1]);
    },
    lastletter: function () {
      //let thelastletter = this.newWord.reverse()[0];
      //let thelastletter = this.newWord.slice(-1)[0];
      //let thelastletter = this.newWord.slice(-1).pop();
      let thelastletter = this.newWord.charAt(this.newWord.length - 1);

      console.log(thelastletter);
      //alert(this.thelastletter);

      for (let index = 0; index < this.words.length; index++) {
        if (this.words[index].charAt(0) == thelastletter) {
          //alert(this.words[index]);
          alert(this.words[index]);
        }
      }
    },

    //this.words.forEach(element => console.log(element));
    /*
      for (let index = 0; index < this.words.length; index++) {
        if (this.words[index].charAt(0) == this.thelastletter) {
          alert(this.words[index]);
        }
      }*/
  },
});
