import p1 from "./assets/1.jpg"
import p2 from "./assets/2.jpg"
import p3 from "./assets/3.jpg"
import p4 from "./assets/4.jpg"
import p5 from "./assets/5.jpg"
import p6 from "./assets/6.jpg"
import p7 from "./assets/7.jpg"
import p8 from "./assets/8.jpg"
import p9 from "./assets/9.jpg"
import p10 from "./assets/10.jpg"
import p11 from "./assets/11.jpg"
import p12 from "./assets/12.jpg"
import p13 from "./assets/13.jpg"
import p14 from "./assets/14.jpg"
import p15 from "./assets/15.jpg"
import p16 from "./assets/16.jpg"
import p17 from "./assets/17.jpg"
import p18 from "./assets/18.jpg"
import p19 from "./assets/19.jpg"
import p20 from "./assets/20.jpg"
import p21 from "./assets/21.jpg"
import p22 from "./assets/22.jpg"
import p23 from "./assets/23.jpg"
import p24 from "./assets/24.jpg"
import p25 from "./assets/25.jpg"
import p26 from "./assets/26.jpg"
import p27 from "./assets/27.jpg"
import p28 from "./assets/28.jpg"
import p29 from "./assets/29.jpg"
import p30 from "./assets/30.jpg"
import p31 from "./assets/31.jpg"

export const PRODUCTS = [
    {
        id: 1,
        Name: "Sauvage",
        Brand: "Dior",
        Price: 80.0,
        Image: p1
    },
    {
        id: 2,
        Name: "The One ",
        Brand: " Dolce&Gabbana ",
        Price: 60.0,
        Image: p2,
    },
    {
        id: 3,
        Name: "Halloween Man X ",
        Brand: "Halloween",
        Price: 70.0,
        Image: p3,
    },
    {
        id: 4,
        Name: "Mercedes Benz Club Black ",
        Brand: "Mercedes Benz",
        Price: 100.0,
        Image: p4,
    },
    {
        id: 5,
        Name: "Individuel ",
        Brand: "Montblanc",
        Price: 40.0,
        Image: p5,
    },
    {
        id: 6,
        Name: "Reversed ",
        Brand: "Hugo ",
        Price: 60.0,
        Image: p6,
    },
    {
        id: 7,
        Name: "Encre Noire ",
        Brand: "Lalique",
        Price: 30.0,
        Image: p7,
    },
    {
        id: 8,
        Name: "Le Male ",
        Brand: "Jean Paul Gaultier",
        Price: 80.0,
        Image: p8,
    },
    {
        id: 9,
        Name: "Le Male Le Parfum",
        Brand: "Jean Paul Gaultier",
        Price: 95.0,
        Image: p9,
    },
    {
        id: 10,
        Name: "Tobacco Vanille",
        Brand: "Tom Ford",
        Price: 100.0,
        Image: p10,
    },
    {
        id: 11,
        Name: "Acqua Di Gio",
        Brand: "Giorgio Armani",
        Price: 70.0,
        Image: p11,
    },
    {
        id: 12,
        Name: "Cedrat Boise",
        Brand: "Mancera",
        Price: 90.0,
        Image: p12,
    },
    {
        id: 13,
        Name: "Bleu de Chanel",
        Brand: "Chanel",
        Price: 75.0,
        Image: p13,
    },
    {
        id: 14,
        Name: "Azzaro Wanted",
        Brand: "Azzaro",
        Price: 55.0,
        Image: p14,
    },
    {
        id: 15,
        Name: "Hugo Boss Bottled",
        Brand: "Hugo Boss",
        Price: 65.0,
        Image: p15,
    },
    {
        id: 16,
        Name: "Dolce & Gabbana Pour Homme",
        Brand: "Dolce & Gabbana",
        Price: 70.0,
        Image: p16,
    },
    {
        id: 17,
        Name: "Versace Eros",
        Brand: "Versace",
        Price: 75.0,
        Image: p17,
    },
    {
        id: 18,
        Name: "Polo Ralph Lauren",
        Brand: "Ralph Lauren",
        Price: 60.0,
        Image: p18,
    },
    {
        id: 19,
        Name: "Stronger With You Absolutely",
        Brand: "Giorgio Armani",
        Price: 70.0,
        Image: p19,
    },
    {
        id: 20,
        Name: "Chanel Allure Homme Sport",
        Brand: "Chanel",
        Price: 85.0,
        Image: p20,
    },
    {
        id: 21,
        Name: "Dior Homme",
        Brand: "Dior",
        Price: 80.0,
        Image: p21,
    },
    {
        id: 22,
        Name: "Bvlgari Man in Black",
        Brand: "Bvlgari",
        Price: 75.0,
        Image: p22,
    },
    {
        id: 23,
        Name: "Calvin Klein Eternity",
        Brand: "Calvin Klein",
        Price: 50.0,
        Image: p23,
    },
    {
        id: 24,
        Name: "Paco Rabanne 1 Million",
        Brand: "Paco Rabanne",
        Price: 65.0,
        Image: p24,
    },
    {
        id: 25,
        Name: "Yves Saint Laurent La Nuit de l'Homme",
        Brand: "Yves Saint Laurent",
        Price: 75.0,
        Image: p25,
    },
    {
        id: 26,
        Name: "Terre d'Hermès",
        Brand: "Hermès",
        Price: 90.0,
        Image: p26,
    },
    {
        id: 27,
        Name: "Prada Luna Rossa",
        Brand: "Prada",
        Price: 80.0,
        Image: p27,
    },
    {
        id: 28,
        Name: "Tom Ford Black Orchid",
        Brand: "Tom Ford",
        Price: 100.0,
        Image: p28,
    },
    {
        id: 29,
        Name: "Creed Aventus",
        Brand: "Creed",
        Price: 250.0,
        Image: p29,
    },
    {
        id: 30,
        Name: "Gucci Guilty",
        Brand: "Gucci",
        Price: 70.0,
        Image: p30,
    },
    {
        id: 31,
        Name: "Issey Miyake L'Eau d'Issey Pour Homme",
        Brand: "Issey Miyake",
        Price: 65.0,
        Image: p31,
    },

]

export const getProducts = (page, limit) => {
    let array = [];
    for (let i = (page - 1) * limit; i < (page * limit); i++) {
        if (i < PRODUCTS.length) {
            array.push(PRODUCTS[i])
        }
    }
    return array;
}