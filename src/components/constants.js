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

// {
//   mapImage: '',
//   position: ,
// },

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
    {
      mapImage: 'https://www.mediafire.com/convkey/8643/pw1ceb8h0pwf2b39g.jpg',
      position: [1220, 2590],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/1ffd/oon4p8qfdtnldpo9g.jpg',
      position: [1794, -352],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/78cb/a64a6jysagtir579g.jpg',
      position: [3060, -2980],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/91f9/5adonwuq7psdrm59g.jpg',
      position: [148, -283],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/b3b2/72ofrdvfwi00iaz9g.jpg',
      position: [416, -521],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/455c/5193cy36ku5atzg9g.jpg',
      position: [2740, -1320],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/6954/mrftciyl8bdu5ht9g.jpg',
      position: [-3480, -1760],
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
    {
      mapImage: 'https://www.mediafire.com/convkey/2ee6/c0wk6tkfdswfu1j9g.jpg',
      position: [843, 1575],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/79b3/qst1bb3jb7489b99g.jpg',
      position: [929, 1641],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/b978/gh5pvdnw2i9oytv9g.jpg',
      position: [2570, -1138],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/b8e7/4m1z0nbbg8l6qs79g.jpg',
      position: [-2836, -885],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/0609/msnqn7vph95kpu89g.jpg',
      position: [2412, -2472],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/3974/n71uwffuqr3u0ma9g.jpg',
      position: [824, 712],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/5a9f/ipqmok1d16lxzlj9g.jpg',
      position: [-2530, 2648],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/7380/zgcijutdzfuq2889g.jpg',
      position: [-2121, 1308],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/4dad/xgacj9aa8vsi6pc9g.jpg',
      position: [-2501, 1410],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/1e36/gropnjsnm3q7qhw9g.jpg',
      position: [-2616, 1306],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/7206/im0jjzedt4wosp79g.jpg',
      position: [2109, 2306],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/ee0d/exnuuvvdn6cvzm79g.jpg',
      position: [77, 95],
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
    {
      mapImage: 'https://www.mediafire.com/convkey/9a53/g7v79rvx44j5z179g.jpg',
      position: [1032, 1665],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/6f18/qkfsqvltzpahary9g.jpg',
      position: [810, 1792],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/53fd/lnvnkxdiozr6t6p9g.jpg',
      position: [-1426, 1502],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/3c0e/lrpbtb5hflkgqkg9g.jpg',
      position: [3144, -1412],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/7d4d/hosuqdtwr9pyna69g.jpg',
      position: [-2268, -2752],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/e9e4/fe80k8xkeyx0xtf9g.jpg',
      position: [-2287, -2489],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/6248/r2z270ruinq8iwl9g.jpg',
      position: [-2441, -2231],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/a077/d67czbxip98m9kd9g.jpg',
      position: [-2260, 2733],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/9016/f1k7kgft4uvxeoq9g.jpg',
      position: [-2516, 2708],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/1abc/imtjk4cq4clgy0f9g.jpg',
      position: [1254, -688],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/a61e/9mirjloe0frnsi19g.jpg',
      position: [1722, 150],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f7a4/6ze9f3hl5n21r2c9g.jpg',
      position: [412, -2326],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d26c/nqj89zvzhziraia9g.jpg',
      position: [2896, 2576],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/7920/486xgkyzcfx9kob9g.jpg',
      position: [2977, 993],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/5565/8odqz8c1pgdpcot9g.jpg',
      position: [-680, -1186],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/787d/dprnqjwgb5pog3y9g.jpg',
      position: [-1184, -3028],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/ab2d/z4yrks2d21y5ikr9g.jpg',
      position: [-542, -3438],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/2add/qicgfdlx0jmwmbm9g.jpg',
      position: [-1008, -3024],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/fc17/4qfz8po6zecbjit9g.jpg',
      position: [-360, 2586],
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
    {
      mapImage: 'https://www.mediafire.com/convkey/eb96/ffia22gmddprko99g.jpg',
      position: [-2522, 2564],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/c7c9/dl298qbpu94ztem9g.jpg',
      position: [-1748, 744],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/36d9/uhrdx9e6n919owq9g.jpg',
      position: [-1638, -1276],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/3be2/xuekmyvszfuunow9g.jpg',
      position: [131, -236],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/455c/ciqm5v04hc28wlk9g.jpg',
      position: [2752, -1374],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/ce20/42wzplknr3ki09w9g.jpg',
      position: [2690, 1178],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/1c87/va619zm3w4ebu149g.jpg',
      position: [-3424, -1406],
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
    {
      mapImage: 'https://www.mediafire.com/convkey/fdca/wazluucpkln2xrm9g.jpg',
      position: [2106, 2356],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/e315/onb1zg0dn9i0jvj9g.jpg',
      position: [2171, 2541],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/dd31/t0439drz7t3awky9g.jpg',
      position: [1600, -284],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d8a7/y2qj5z78pjg10zx9g.jpg',
      position: [1032, 1665],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/783a/6o3r1js854c2ti49g.jpg',
      position: [58, 65],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/dc37/07mgx3v2h1sroii9g.jpg',
      position: [-547, 3019],
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
    {
      mapImage: 'https://www.mediafire.com/convkey/2300/9eb77z592ng95n79g.jpg',
      position: [3292, -988],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/a25a/d0cb9izet10doax9g.jpg',
      position: [2932, 2360],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/06c8/hc357k98jddaeai9g.jpg',
      position: [2283, 1017],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/a560/s2f5kurhigxegx29g.jpg',
      position: [2348, 1080],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/9208/ss2w9y5k0gz6fdz9g.jpg',
      position: [2734, 668],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/7219/z9ryum8hklueakr9g.jpg',
      position: [-504, -1402],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/5f3a/vyzcm7eqoykmffz9g.jpg',
      position: [-1584, -3096],
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
    {
      mapImage: 'https://www.mediafire.com/convkey/ad82/rat0g84pi5xq3og9g.jpg',
      position: [1202, 2970],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/cfc7/uv9diskqo7nu6wt9g.jpg',
      position: [1212, 3001],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f33c/8kzvo1b3kj7xsbj9g.jpg',
      position: [-1554, -1270],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/a76e/tdezns5jwhjwim99g.jpg',
      position: [-1960, -1277],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/9b32/zac6enfeaqfxzg19g.jpg',
      position: [-2536, -3104],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/7d3f/nvqqo13zup260ac9g.jpg',
      position: [806, 386],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/44b5/9u4ns70hut1udlx9g.jpg',
      position: [2562, -2794],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/db63/ippgnum5xcd25um9g.jpg',
      position: [174, -482],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/434f/0fl5dunovu8kqgo9g.jpg',
      position: [2142, 1204],
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
    {
      mapImage: 'https://www.mediafire.com/convkey/9bc5/cdv2wj47ek67b499g.jpg',
      position: [682, 2031],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f4a3/inoumb1jlpl39t59g.jpg',
      position: [-2850, -2098],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/bc27/4tge0ag66fpkbki9g.jpg',
      position: [876, -2485],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/f7ad/onfaj9bzm7hea8e9g.jpg',
      position: [2771, -3133],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/ee07/zw2b6ki81pf32jm9g.jpg',
      position: [-1181, -1276],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/d248/hwdl8fp6oljeuby9g.jpg',
      position: [-2416, 2632],
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
    {
      mapImage: 'https://www.mediafire.com/convkey/1653/u0fu3zgoxut0h9j9g.jpg',
      position: [2596, -1802],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/e295/8mlu9jo9fzed8ln9g.jpg',
      position: [2892, -1314],
    },
    {
      mapImage: 'https://www.mediafire.com/convkey/48ec/7p8tjw3d4thfr9d9g.jpg',
      position: [-601, 2907],
    },
  ],
}