import toolbox_1_desalle from '../images/Toolbox/Desalle/Desalle_DarinShipyard_20240323201302.jpg';
import toolbox_2_desalle from '../images/Toolbox/Desalle/Desalle_Prison_20240323233120.jpg';

import trait_1_lawson from '../images/Trait/Lawson/Lawson_FortCarmick_20240322135758.jpg';
import trait_2_lawson from '../images/Trait/Lawson/Lawson_Pork_20240324132821.jpg';
import trait_1_stillwater from '../images/Trait/Stillwatter/Stillwater_Fish_20240323221050.jpg';
import trait_1_desalle from '../images/Trait/Desalle/Desalle_FortBolden_20240323233234.jpg';

import toolbox from '../images/Toolbox.png';
import trait from '../images/trait_cr.png';
import cash from '../images/cash_cr.png';

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

export const toolboxImg = {
  icon: toolbox,
  stillwater: [
    { mapImage: toolbox_1_desalle, position: [1850, 560] },
    { mapImage: toolbox_2_desalle, position: [250, 260] },
    // { mapImage: 'https://www.mediafire.com/convkey/352d/sk49kq3eb34ts5rzg.jpg?size_id=a',
    //   position: [1850, 560]
    // }
  ],
  lawson: [
    { mapImage: toolbox_1_desalle, position: [850, 860] },
    { mapImage: toolbox_2_desalle, position: [450, 360] },
  ],
  desalle: [
    { mapImage: toolbox_1_desalle, position: [1850, 160] },
    { mapImage: toolbox_2_desalle, position: [250, 160] },
  ],
}

export const traitImg = {
  icon: trait,
  stillwater: [
    { mapImage: trait_1_stillwater, position: [-350, 260] },
  ],
  lawson: [
    { mapImage: trait_1_lawson, position: [1650, 1560] },
    { mapImage: trait_2_lawson, position: [-650, 560] },
  ],
  desalle: [
    { mapImage: trait_1_desalle, position: [150, 1560] },
  ],
}

export const cashImg = {
  icon: cash,
  stillwater: [
    { mapImage: trait_1_stillwater, position: [-350, 1560] },
  ],
  lawson: [
    { mapImage: trait_2_lawson, position: [-950, 1260] },
  ],
  desalle: [
    { mapImage: trait_1_desalle, position: [1150, -1560] },
  ],
}