const collabFiles = import.meta.glob("@/assets/collabs/*", {eager: true, import: "default"});

export function imgUrl(file) {
    const entry = Object.entries(collabFiles).find(([k]) => k.endsWith("/" + file));
    return entry ? entry[1] : "";
}

export const collabs = [
  // === OSLO RUNWAY ===
  { id: 'c1', file: 'c1.avif',  partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Envelope1976', photographer: 'Ole Martin Halvorsen', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c3', file: 'c3.avif',  partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Pearl Octopuss.y', photographer: 'Stephanie Sikkes', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c4', file: 'c4.avif',  partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Christian Aks', photographer: 'Magnus Nordstrand', notes: 'Lead makeup: Celine Harket' },
  { id: 'c6', file: 'c6.avif',  partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Christian Aks', photographer: 'Magnus Nordstrand', notes: 'Lead makeup: Celine Harket' },
  { id: 'c8', file: 'c8.avif',  partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Envelope1976', photographer: 'Ole Martin Halvorsen', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c11', file: 'c11.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Livid', photographer: 'Sture Nordhagen', notes: 'Lead makeup: Sissel Fylling' },
  { id: 'c12', file: 'c12.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Livid', photographer: 'Sture Nordhagen', notes: 'Lead makeup: Sissel Fylling' },
  { id: 'c14', file: 'c14.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Woodling', photographer: 'Jasper Wyatt', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c17', file: 'c17.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Livid', photographer: 'Sture Nordhagen', notes: 'Lead makeup: Sissel Fylling' },
  { id: 'c18', file: 'c18.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Envelope1976', photographer: 'Ole Martin Halvorsen', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c19', file: 'c19.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Envelope1976', photographer: 'Ole Martin Halvorsen', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c21', file: 'c21.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Christian Aks', photographer: 'Magnus Nordstrand', notes: 'Lead makeup: Celine Harket' },
  { id: 'c30', file: 'c30.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', year: 2024, designer: 'Woodling', photographer: 'Jasper Wyatt', notes: 'Lead makeup: Linda Wickmann' },

  // duplikater
  { id: 'c9',  file: 'c9.avif',  partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', duplicateOf: 'c4' },
  { id: 'c15', file: 'c15.avif', partnerSlug: 'oslo-runway', partnerName: 'Oslo Runway', duplicateOf: 'c6' },

  // === COSTUME AWARDS ===
  { id: 'c2',  file: 'c2.avif',  partnerSlug: 'costume-awards', partnerName: 'Costume Awards', year: 2024, notes: 'Celine Aagaard' },
  { id: 'c16', file: 'c16.avif', partnerSlug: 'costume-awards', partnerName: 'Costume Awards', year: 2024, notes: 'Estaban G Villanueva' },
  { id: 'c22', file: 'c22.avif', partnerSlug: 'costume-awards', partnerName: 'Costume Awards', year: 2024, notes: 'Frida Martinsen' },

  // === COSTUME MAG ===
  { id: 'c5',  file: 'c5.avif',  partnerSlug: 'costume-mag', partnerName: 'Costume Magasin', year: 2024, photographer: 'Desiree Mattsson', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c7',  file: 'c7.avif',  partnerSlug: 'costume-mag', partnerName: 'Costume Magasin', year: 2024, photographer: 'Desiree Mattsson', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c20', file: 'c20.avif', partnerSlug: 'costume-mag', partnerName: 'Costume Magasin', year: 2024, photographer: 'Desiree Mattsson', notes: 'Lead makeup: Linda Wickmann' },
  { id: 'c29', file: 'c29.avif', partnerSlug: 'costume-mag', partnerName: 'Costume Magasin', year: 2024, photographer: 'Desiree Mattsson', notes: 'Lead makeup: Linda Wickmann' },

  // === KREATIV SHOOT ===
  { id: 'c13', file: 'c13.avif', partnerSlug: 'kreativ-shoot', partnerName: 'Kreativ shoot', photographer: 'Karoline B Skaug', notes: 'Styling: Irene Askedalen' },
  { id: 'c28', file: 'c28.avif', partnerSlug: 'kreativ-shoot', partnerName: 'Kreativ shoot', photographer: 'Karoline B Skaug', notes: 'Styling: Irene Askedalen' },

  // === CAMPAGNE: CAMILLA ØHRLING JEWELRY ===
  { id: 'c10', file: 'c10.avif', partnerSlug: 'camilla-ohrling', partnerName: 'Camilla Øhrling Jewelry', photographer: 'Nelly Oz' },
  { id: 'c23', file: 'c23.avif', partnerSlug: 'camilla-ohrling', partnerName: 'Camilla Øhrling Jewelry', photographer: 'Nelly Oz' },
  { id: 'c24', file: 'c24.avif', partnerSlug: 'camilla-ohrling', partnerName: 'Camilla Øhrling Jewelry', photographer: 'Nelly Oz' },
  { id: 'c25', file: 'c25.avif', partnerSlug: 'camilla-ohrling', partnerName: 'Camilla Øhrling Jewelry', photographer: 'Nelly Oz' },
  { id: 'c26', file: 'c26.avif', partnerSlug: 'camilla-ohrling', partnerName: 'Camilla Øhrling Jewelry', photographer: 'Nelly Oz' },
  { id: 'c27', file: 'c27.avif', partnerSlug: 'camilla-ohrling', partnerName: 'Camilla Øhrling Jewelry', photographer: 'Nelly Oz' },
  { id: 'c31', file: 'c31.avif', partnerSlug: 'camilla-ohrling', partnerName: 'Camilla Øhrling Jewelry', photographer: 'Nelly Oz' },
];