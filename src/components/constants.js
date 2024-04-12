import toolbox from '../images/toolbox.png';
import trait from '../images/trait_cr.png';
import cash from '../images/cash_cr.png';

import stillwater_en from '../images/maps/stillwater_ai.png';
import stillwater_ru from '../images/maps/stillwater_ai_ru.png';
import lawson_en from '../images/maps/lawson_ai.png';
import lawson_ru from '../images/maps/lawson_ai_ru.png';
import desalle_en from '../images/maps/desalle_ai.png';
import desalle_ru from '../images/maps/desalle_ai_ru.png';

export const constants = {
  stillwater: 'stillwater',
  lawson: 'lawson',
  desalle:'desalle',
}

export const initialFilterState = {
  toolbox: true,
  trait: true,
  cash: true,
}

export const dictionary = {
  en: {
    language: 'Language',
    stillwater: 'Stillwater Bayou',
    lawson: 'Lawson Delta',
    desalle: 'Desalle',
    toolbox: 'Tool Box',
    trait: 'Trait',
    cash: 'Cash',
    maps: {
      stillwater: stillwater_en,
      lawson: lawson_en,
      desalle: desalle_en
    }
  },
  ru: {
    language: 'Язык',
    stillwater: 'Болото Стилуотер',
    lawson: 'Дельта Лоусон',
    desalle: 'Де-Салль',
    toolbox: 'Ящик',
    trait: 'Навык',
    cash: 'Касса',
    maps: {
      stillwater: stillwater_ru,
      lawson: lawson_ru,
      desalle: desalle_ru
    }
  }
}

export const toolboxImg = {
  icon: toolbox,
  stillwater: [
    {
      mapImage: 'https://www.mediafire.com/convkey/1880/4s1vnz7dd5m8l6i9g.jpg',
      position: [652, -2097],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/ae99/ces3bdhvckkdpvs9g.jpg',
      position: [740, -2108],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/0c2b/g8hdkjr3dmv7z129g.jpg',
      position: [1274, 2983],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d006/c8go562b55tifl19g.jpg',
      position: [-1328, -70],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f455/05dknxrryupnklv9g.jpg',
      position: [-1532, -236],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/77b0/dhflzrfezos8tdu9g.jpg',
      position: [-1880, 780],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/59db/jlgecdoswhe3k6k9g.jpg',
      position: [-1884, -1294],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/3a8b/e8y8v5e7fk7z4k89g.jpg',
      position: [1726, -298],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/6a21/m5mvq6zyll79bzz9g.jpg',
      position: [651, 850],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d5b6/ajdmjsdes0ac6ml9g.jpg',
      position: [2796, -2890],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f64c/lwa9jht5kvleilo9g.jpg',
      position: [-280, -1164],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/9e1f/wy4cwzm3vthlp5u9g.jpg',
      position: [200, -476],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/2cd6/7eru1sxdtl3ce339g.jpg',
      position: [2522, 1166],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/5d3f/jfe2v709aqnhf7w9g.jpg',
      position: [2530, 837],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/aecf/lch5exv5dxjtig09g.jpg',
      position: [2624, 2896],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/bc82/w5xf3fkl0r8uhu59g.jpg',
      position: [-3270, 398],
    },
  ],
  lawson: [
    {
      mapImage: 'https://www.mediafire.com/convkey/f288/75asvzv4occ8x6i9g.jpg',
      position: [1127, -2678],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/73e4/kapyvibdg4zd9fb9g.jpg',
      position: [804, -2619],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/e532/ilz24tath0s29ft9g.jpg',
      position: [880, -2160],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/6122/scdjvwqttvm4u3y9g.jpg',
      position: [2758, -1170],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/3be6/wcei53pjc9hsj6r9g.jpg',
      position: [2859, -1161],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/cd1b/ofrgzmz78xgtchc9g.jpg',
      position: [2865, -1530],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/c9ca/0sv9odsfwknyw2m9g.jpg',
      position: [3033, -1183],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/903b/ibt2ax3wpydt60a9g.jpg',
      position: [-2964, -568],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/8d76/oc2npro4vqqzjnm9g.jpg',
      position: [2540, 1215],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d027/n9ktpfkg2nb4suq9g.jpg',
      position: [2658, 885],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/2c09/euuf6fqqnzcjl9u9g.jpg',
      position: [2715, 866],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/2a98/mjb73v38easgg0b9g.jpg',
      position: [214, 306],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/b168/9lqitdqvgjr9jv49g.jpg',
      position: [484, -150],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/423a/ktezx77ers83xsp9g.jpg',
      position: [-1415, -1247],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/25d3/ex1jxp9z7qusj0x9g.jpg',
      position: [3040, -2850],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d44c/mu1g59j979pwqoy9g.jpg',
      position: [-799, 3248],
    },
  ],
  desalle: [
    {
      mapImage: 'https://www.mediafire.com/convkey/c86c/dbc2q2hii94fya79g.jpg?size_id=6',
      position: [1190, 1624],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/19ea/a3l6dj6l1x5vznkzg.jpg?size_id=6',
      position: [877, 1895],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/7520/z7m2iewotf7toko9g.jpg?size_id=6',
      position: [2916, -860],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/dbab/ly6b1lu6msejuk59g.jpg',
      position: [-2840, -765],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/9481/m5s6opvz0uebn7e9g.jpg',
      position: [-3106, -814],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/8b6f/glje0gb6cc8v88a9g.jpg',
      position: [-2332, -2694],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/2628/9erwe97yoyovnvl9g.jpg',
      position: [-2480, -2753],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/8d28/9nbtmjgxuk1qwpv9g.jpg',
      position: [-2515, -2318],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/8fe6/vjfv9butxcqosmq9g.jpg',
      position: [-2640, -2788],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/fd71/haiy99iui8l75t69g.jpg',
      position: [-2686, -3086],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/4af7/n4q0wchllggmwaq9g.jpg',
      position: [-2729, -2474],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/cf54/5xbf72gdfz8fps49g.jpg',
      position: [2294, -2642],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d7c7/rps94bpk8vrydhy9g.jpg',
      position: [2432, -2903],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/5c6c/5snkeu4no6bdfks9g.jpg',
      position: [612, -2889],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/37f0/str2zdkgw5rwetd9g.jpg',
      position: [2645, 2696],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/0168/gq3r310yhyv3h799g.jpg',
      position: [2762, 2428],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/a2eb/bv3sfr3eq8a0asx9g.jpg',
      position: [2990, 2054],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/1772/t04u307fxt71o3z9g.jpg',
      position: [2589, 598],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/faeb/v6aoqgfujzezen29g.jpg',
      position: [2619, 530],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/ccc6/wtvqm3wcr679yar9g.jpg',
      position: [-1308, -1160],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/e7f9/i0rwtdwh3uxkcw39g.jpg',
      position: [-1330, -1402],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f11f/p78d0rs534eha0o9g.jpg',
      position: [-40, -320],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/81c3/vvjhfnigygw2bfv9g.jpg',
      position: [306, -438],
    },
  ],
}

export const traitImg = {
  icon: trait,
  stillwater: [
    {
      mapImage: 'https://www.mediafire.com/convkey/01be/6raqu3avyvs013t9g.jpg',
      position: [-2650, 2732],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/a901/y138bq7e9jhnlyu9g.jpg',
      position: [-2655, 2480],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d4ef/bx5wy35zc2imhge9g.jpg',
      position: [-1188, -1556],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/0126/wubwvoacub4kcoq9g.jpg',
      position: [919, 649],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/36e3/hvv8pwdhegblpt29g.jpg',
      position: [2502, -2831],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/2350/exgywrs2kw52es79g.jpg',
      position: [2626, -2750],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f4c2/2c757kpwrrw6dv99g.jpg',
      position: [-3231, 369],
    },
  ],
  lawson: [
    {
      mapImage: 'https://www.mediafire.com/convkey/1aa4/9ri3883j0h3dtms9g.jpg',
      position: [-1384, -994],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/7499/vu27sbbh2h3r0169g.jpg',
      position: [-1434, -1121],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/ea37/bbve1ckjrpjujcz9g.jpg',
      position: [-1001, -2743],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d909/ibh6m1z2ewg8ngq9g.jpg',
      position: [-2266, 1204],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/c08d/9syunvpo5kfqoof9g.jpg',
      position: [2160, 2668],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/ce94/ck5oy1peux36r9v9g.jpg',
      position: [2249, 2777],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/5dcd/n2auqb45hjgjvg69g.jpg',
      position: [2367, 2642],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/6fad/mme35bi6ipu16p39g.jpg',
      position: [-1038, 2095],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/6851/fln9bpieeb8fjdh9g.jpg',
      position: [-1221, 1782],
    },
  ],
  desalle: [
    {
      mapImage: 'https://www.mediafire.com/convkey/78b5/ufvvapsaz1wwyr59g.jpg',
      position: [1112, 1771],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/2b4c/f2kr5xum7txfw8o9g.jpg',
      position: [1404, 2272],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/9a7d/vkzjvrbw894qvg89g.jpg',
      position: [2989, -1416],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/a6c2/4q5w792mo8dd9wd9g.jpg',
      position: [-2276, -2240],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/3976/r2t7awx9zhhkbqv9g.jpg',
      position: [-28, 343],
    },
  ],
}

export const cashImg = {
  icon: cash,
  stillwater: [
    {
      mapImage: 'https://www.mediafire.com/convkey/e24c/p1wf1upz964vd139g.jpg',
      position: [384, -2432],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/772a/4z1f88hk2srur189g.jpg',
      position: [-496, -1256],
    },
  ],
  lawson: [
    {
      mapImage: 'https://www.mediafire.com/convkey/650f/f5ovef01a3xqp0f9g.jpg',
      position: [465, 2023],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/4277/grkjsn9nl676lez9g.jpg',
      position: [169, 148],
    },
  ],
  desalle: [
    {
      mapImage: 'https://www.mediafire.com/convkey/fe30/2uzyr12jeibp30p9g.jpg',
      position: [-2638, -2546],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f647/tlv69r9ln1yitxs9g.jpg',
      position: [3017, 977],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/885e/l0leyeuzzovlwut9g.jpg',
      position: [-1420, 2732],
    },
  ],
}