/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const hatchArray = [
  {
    id: "hatch-1",
    nr: 1,
    img_background: "./img/1.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "Pas de chocolat aujourd'hui mais tu as gagné un massage! ",
    open: false
    
  },
  {
    id: "hatch-2",
    nr: 2,
    img_background: "./img/2.jpg",
    img_foreground: "./img/2_back.jpg",
    text:
      "Décorer le ficus de Noël",
    open: false
  },
  {
    id: "hatch-3",
    nr: 3,
    img_background: "./img/3.jpg",
    img_foreground: "./img/3_back.jpg",
    text:
      "Bon pour regarder un film de fille dans le canapé",
    open: false
  },
  {
    id: "hatch-4",
    nr: 4,
    img_background: "./img/4.jpg",
    img_foreground: "./img/4_back.jpg",
    text:
      "",
    open: false
  },
  {
    id: "hatch-5",
    nr: 5,
    img_background: "./img/5.jpg",
    img_foreground: "./img/5_back.jpg",
    text:
      "Bon pour passer ton tour à la vaisselle",
    open: false
  },
  {
    id: "hatch-6",
    nr: 6,
    img_background: "./img/6.jpg",
    img_foreground: "./img/6_back.jpg",
    text:
      "Ton chérie va te chercher une viennoiserie de ton choix",
    open: false
  },
  {
    id: "hatch-7",
    nr: 7,
    img_background: "./img/7.jpg",
    img_foreground: "./img/7_back.jpg",
    text:
      "Je crois en toi",
    open: false
  },
  {
    id: "hatch-8",
    nr: 8,
    img_background: "./img/8.jpg",
    img_foreground: "./img/8_back.jpg",
    text:
      "Tu m'envoies une photo de toi pour montrer au Père Noël ce que je veux pour Noël?",
    open: false
  },
  {
    id: "hatch-9",
    nr: 9,
    img_background: "./img/9.jpg",
    img_foreground: "./img/9_back.jpg",
    text:
      "Ton chérie te prépare le plat de ton choix",
    open: false
  },
  {
    id: "hatch-10",
    nr: 10,
    img_background: "./img/10.jpg",
    img_foreground: "./img/10_back.jpg",
    text:
      "Le père noël veut que tu lui envoie une lettre en lui confiant quel pyjama tu veux pour noël",
    open: false
  },
  {
    id: "hatch-11",
    nr: 11,
    img_background: "./img/11.jpg",
    img_foreground: "./img/11_back.jpg",
    text:
      "Le père noël t'offre ta dernière facture EDF",
    open: false
  },
  {
    id: "hatch-12",
    nr: 12,
    img_background: "./img/12.jpg",
    img_foreground: "./img/12_back.jpg",
    text:
      "Un repas sur Just-eat!",
    open: false
  },
  {
    id: "hatch-13",
    nr: 13,
    img_background: "./img/13.jpg",
    img_foreground: "./img/13_back.jpg",
    text:
      "Une gourmandise de Bibou",
    open: false
  },
  {
    id: "hatch-14",
    nr: 14,
    img_background: "./img/14.jpg",
    img_foreground: "./img/14_back.jpg",
    text:
      "Une photo de chat",
    open: false
  },
  {
    id: "hatch-15",
    nr: 15,
    img_background: "./img/15.jpg",
    img_foreground: "./img/15_back.jpg",
    text:
      "Une bougie parfumé",
    open: false
  },
  {
    id: "hatch-16",
    nr: 16,
    img_background: "./img/16.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
  {
    id: "hatch-17",
    nr: 17,
    img_background: "./img/17.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
  {
    id: "hatch-18",
    nr: 18,
    img_background: "./img/18.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
  {
    id: "hatch-19",
    nr: 19,
    img_background: "./img/19.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
  {
    id: "hatch-20",
    nr: 20,
    img_background: "./img/20.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
  {
    id: "hatch-21",
    nr: 21,
    img_background: "./img/21.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
  {
    id: "hatch-22",
    nr: 22,
    img_background: "./img/22.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
  {
    id: "hatch-23",
    nr: 23,
    img_background: "./img/23.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
  {
    id: "hatch-24",
    nr: 24,
    img_background: "./img/24.jpg",
    img_foreground: "./img/hatch_backdrop.jpg",
    text:
      "53c237_73x7",
    open: false
  },
];

export const createCalendar = () => shuffle(hatchArray);
