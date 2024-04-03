import toolbox_1_desalle from '../images/Toolbox/Desalle/Desalle_DarinShipyard_20240323201302.jpg';
import toolbox_2_desalle from '../images/Toolbox/Desalle/Desalle_Prison_20240323233120.jpg';

import trait_1_lawson from '../images/Trait/Lawson/Lawson_FortCarmick_20240322135758.jpg';
import trait_2_lawson from '../images/Trait/Lawson/Lawson_Pork_20240324132821.jpg';
import trait_1_stillwater from '../images/Trait/Stillwatter/Stillwater_Fish_20240323221050.jpg';
import trait_1_desalle from '../images/Trait/Desalle/Desalle_FortBolden_20240323233234.jpg';

import toolbox from '../images/toolbox_img.png';
import trait from '../images/levering_cr.jpg';

export const constants = {
  stillwater: 'stillwater',
  lawson: 'lawson',
  desalle:'desalle',
}

export const initialFilterState = {
  toolbox: true,
  trait: true,
}

export const toolboxImg = {
  stillwater: [
    { mapImage: toolbox_1_desalle, icon: toolbox, position: [1850, 560] },
    { mapImage: toolbox_2_desalle, icon: toolbox, position: [250, 260] },
  ],
  lawson: [
    { mapImage: toolbox_1_desalle, icon: toolbox, position: [850, 860] },
    { mapImage: toolbox_2_desalle, icon: toolbox, position: [450, 360] },
  ],
  desalle: [
    { mapImage: toolbox_1_desalle, icon: toolbox, position: [1850, 160] },
    { mapImage: toolbox_2_desalle, icon: toolbox, position: [250, 160] },
  ],
}

export const traitImg = {
  stillwater: [
    { mapImage: trait_1_stillwater, icon: trait, position: [-350, 260] },
  ],
  lawson: [
    { mapImage: trait_1_lawson, icon: trait, position: [1650, 1560] },
    { mapImage: trait_2_lawson, icon: trait, position: [-650, 560] },
  ],
  desalle: [
    { mapImage: trait_1_desalle, icon: trait, position: [150, 1560] },
  ],
}