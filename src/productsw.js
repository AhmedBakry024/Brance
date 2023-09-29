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

export const PRODUCTSW = [
    {
        id: 32,
        Name: "Sauvage",
        Brand: "Dior",
        Gender: "Men",
        Price: 80.0,
        Image: p1,
    },
    {
        id: 33,
        Name: "The One",
        Brand: "Dolce&Gabbana",
        Gender: "Men",
        Price: 60.0,
        Image: p2,
    },
    {
        id: 34,
        Name: "Halloween Man X",
        Brand: "Halloween",
        Gender: "Men",
        Price: 70.0,
        Image: p3,
    },
    {
        id: 35,
        Name: "Mercedes Benz Club Black",
        Brand: "Mercedes Benz",
        Gender: "Men",
        Price: 100.0,
        Image: p4,
    },
    {
        id: 36,
        Name: "Individuel",
        Brand: "Montblanc",
        Gender: "Men",
        Price: 40.0,
        Image: p5,
    },
    {
        id: 37,
        Name: "Reversed",
        Brand: "Hugo",
        Gender: "Men",
        Price: 60.0,
        Image: p6,
    },
    {
        id: 38,
        Name: "Encre Noire",
        Brand: "Lalique",
        Gender: "Men",
        Price: 30.0,
        Image: p7,
    },
    {
        id: 39,
        Name: "Le Male",
        Brand: "Jean Paul Gaultier",
        Gender: "Men",
        Price: 80.0,
        Image: p8,
    },
    {
        id: 40,
        Name: "Le Male Le Parfum",
        Brand: "Jean Paul Gaultier",
        Gender: "Men",
        Price: 95.0,
        Image: p9,
    },
    {
        id: 41,
        Name: "Tobacco Vanille",
        Brand: "Tom Ford",
        Gender: "Men",
        Price: 100.0,
        Image: p10,
    },
    {
        id: 42,
        Name: "Acqua Di Gio",
        Brand: "Giorgio Armani",
        Gender: "Men",
        Price: 70.0,
        Image: p11,
    },
    {
        id: 43,
        Name: "Cedrat Boise",
        Brand: "Mancera",
        Gender: "Men",
        Price: 90.0,
        Image: p12,
    },
    {
        id: 44,
        Name: "Bleu de Chanel",
        Brand: "Chanel",
        Gender: "Men",
        Price: 75.0,
        Image: p13,
    },
    {
        id: 45,
        Name: "Azzaro Wanted",
        Brand: "Azzaro",
        Gender: "Men",
        Price: 55.0,
        Image: p14,
    },

]


export const getProductsw = (page, limit) => {
    let array = [];
    for (let i = (page - 1) * limit; i < (page * limit); i++) {
        if (i < PRODUCTSW.length) {
            array.push(PRODUCTSW[i])
        }
    }
    return array;
}