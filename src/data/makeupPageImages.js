
// IMPORTER ALLE BILDER
import fenja1 from "../assets/makeup/fenja1.avif";
import fenja2 from "../assets/makeup/fenja2.avif";
import fenja3 from "../assets/makeup/fenja3.avif";
import fenja4 from "../assets/makeup/fenja4.avif";

import karlh1 from "../assets/makeup/karlh1.avif";
import karlh2 from "../assets/makeup/karlh2.avif";
import karlh3 from "../assets/makeup/karlh3.avif";
import karlh4 from "../assets/makeup/karlh4.avif";

import kjondal1 from "../assets/makeup/kjondal1.jpeg";
import kjondal2 from "../assets/makeup/kjondal2.jpeg";
import kjondal3 from "../assets/makeup/kjondal3.jpeg";

import ksenia1 from "../assets/makeup/ksenia1.jpg";
import ksenia2 from "../assets/makeup/ksenia2.jpg";
import ksenia3 from "../assets/makeup/ksenia3.jpg";
import ksenia4 from "../assets/makeup/ksenia4.jpg";
import ksenia5 from "../assets/makeup/ksenia5.jpg";

import maiken1 from "../assets/makeup/maiken1.jpg";
import maiken2 from "../assets/makeup/maiken2.jpg";
import maiken3 from "../assets/makeup/maiken3.jpg";

import marianne1 from "../assets/makeup/marianne1.JPEG";
import marianne2 from "../assets/makeup/marianne2.JPEG";

import skole1 from "../assets/makeup/skole1.png";
import skole2 from "../assets/makeup/skole2.jpg";
import skole3 from "../assets/makeup/skole3.png";
import skole4 from "../assets/makeup/skole4.png";

import sofia1 from "../assets/makeup/sofia1.jpg";
import sofia2 from "../assets/makeup/sofia2.jpg";
import sofia3 from "../assets/makeup/sofia3.JPG";
import sofia4 from "../assets/makeup/sofia4.jpeg";

import vilja1 from "../assets/makeup/vilja1.jpg";
import vilja2 from "../assets/makeup/vilja2.jpg";
import vilja3 from "../assets/makeup/vilja3.jpg";
import vilja4 from "../assets/makeup/vilja4.jpg";

// ARRAY MED INFORMASJON
export const makeupPhotos = [
    // FENJA
    { src: fenja1, alt: "Fenja 1", title: "Kampanjeshoot for Fenja", stylist: "", designer: "", photographer: "@dilanrasol", model: "@a_tinholt (@teammodels)" },
    { src: fenja2, alt: "Fenja 2", title: "Kampanjeshoot for Fenja", stylist: "", designer: "", photographer: "@dilanrasol", model: "@a_tinholt (@teammodels)" },
    { src: fenja3, alt: "Fenja 3", title: "Kampanjeshoot for Fenja", stylist: "", designer: "", photographer: "@dilanrasol", model: "@a_tinholt (@teammodels)" },
    { src: fenja4, alt: "Fenja 4", title: "Kampanjeshoot for Fenja", stylist: "", designer: "", photographer: "@dilanrasol", model: "@a_tinholt (@teammodels)" },

    // KARLH (ta med stylist @ireneaskedalen)
    { src: karlh1, alt: "Karlh 1", title: "Testshoot", stylist: "@ireneaskedalen", designer: "", photographer: "@karolinebskaug", model: "@karlhenriksolbakken" },
    { src: karlh2, alt: "Karlh 2", title: "Testshoot", stylist: "@ireneaskedalen", designer: "", photographer: "@karolinebskaug", model: "@karlhenriksolbakken" },
    { src: karlh3, alt: "Karlh 3", title: "Testshoot", stylist: "@ireneaskedalen", designer: "", photographer: "@karolinebskaug", model: "@karlhenriksolbakken" },
    { src: karlh4, alt: "Karlh 4", title: "Testshoot", stylist: "@ireneaskedalen", designer: "", photographer: "@karolinebskaug", model: "@karlhenriksolbakken" },

    // KJØNDAL
    { src: kjondal1, alt: "Kjøndal 1", title: "Testshoot", stylist: "", designer: "", photographer: "@kjondalfoto", model: "@almaskolmen | @malinlcs" },
    //{ src: kjondal2, alt: "Kjøndal 2", title: "", photographer: "", model: "" },
    { src: kjondal3, alt: "Kjøndal 3", title: "Testshoot", stylist: "", designer: "", photographer: "@kjondalfoto", model: "@almaskolmen | @malinlcs | @anitaat" },

    // KSENIA (stylist: @synne___louise )
    { src: ksenia1, alt: "Ksenia 1", title: "Portofolio for @3rd.management", stylist: "@synne____louise", designer: "", photographer: "@markusmjaaland", model: "@ksunvkv" },
    { src: ksenia2, alt: "Ksenia 2", title: "Portofolio for @3rd.management", stylist: "@synne____louise", designer: "", photographer: "@markusmjaaland", model: "@ksunvkv" },
    { src: ksenia3, alt: "Ksenia 3", title: "Portofolio for @3rd.management", stylist: "@synne____louise", designer: "", photographer: "@markusmjaaland", model: "@ksunvkv" },
    { src: ksenia4, alt: "Ksenia 4", title: "Portofolio for @3rd.management", stylist: "@synne____louise", designer: "", photographer: "@markusmjaaland", model: "@ksunvkv" },
    { src: ksenia5, alt: "Ksenia 5", title: "Portofolio for @3rd.management", stylist: "@synne____louise", designer: "", photographer: "@markusmjaaland", model: "@ksunvkv" },

    // MAIKEN
    { src: maiken1, alt: "Maiken 1", title: "Portofolio", stylist: "", designer: "", photographer: "@trulsqvale", model: "@maikenwn" },
    { src: maiken2, alt: "Maiken 2", title: "Portofolio", stylist: "", designer: "", photographer: "@trulsqvale", model: "@maikenwn" },
    { src: maiken3, alt: "Maiken 3", title: "Portofolio", stylist: "", designer: "", photographer: "@trulsqvale", model: "@maikenwn" },

    // MARIANNE (designer: @em______hm)
    { src: marianne1, alt: "Marianne 1", title: "Photoshoot", stylist: "", designer: "em__________hm", photographer: "@stephaniesikkes", model: "@mariannehaugli" },
    { src: marianne2, alt: "Marianne 2", title: "Photoshoot", stylist: "", designer: "em__________hm", photographer: "@stephaniesikkes", model: "@mariannehaugli" },

    // SKOLE 
    { src: skole1, alt: "Skole 1", title: "Skoleoppgave ved LW School of makeup", stylist: "", designer: "", photographer: "@nellyozphotography", model: "@frida_elene" },
    { src: skole2, alt: "Skole 2", title: "Skoleoppgave ved LW School of makeup", stylist: "", designer: "", photographer: "@siobhanbeasleyphotography", model: "@isaborring" },
    { src: skole3, alt: "Skole 3", title: "Masterclass med @lapetitvengance", stylist: "", designer: "", photographer: "@siobhanbeasleyphotography", model: "@nadiabdaniel" },
    { src: skole4, alt: "Skole 4", title: "Skoleoppgave ved LW School of makeup", stylist: "", designer: "", photographer: "@nellyozphotography", model: "@frida_elene" },

    // SOFIA
    { src: sofia1, alt: "Sofia 1", title: "Portofolio for @3rd.management", stylist: "", designer: "", photographer: "@markusmjaaland", model: "@sofiamqh" },
    { src: sofia2, alt: "Sofia 2", title: "Portofolio for @3rd.management", stylist: "", designer: "", photographer: "@markusmjaaland", model: "@sofiamqh" },
    { src: sofia3, alt: "Sofia 3", title: "Portofolio for @3rd.management", stylist: "", designer: "", photographer: "@markusmjaaland", model: "@sofiamqh" },
    { src: sofia4, alt: "Sofia 4", title: "Portofolio for @3rd.management", stylist: "", designer: "", photographer: "@markusmjaaland", model: "@sofiamqh" },

    // VILJA
    { src: vilja1, alt: "Vilja 1", title: "Testshoot", stylist: "", designer: "", photographer: "@trulskvaqvale", model: "@viljanock" },
    { src: vilja2, alt: "Vilja 2", title: "Testshoot", stylist: "", designer: "", photographer: "@trulskvaqvale", model: "@viljanock" },
    { src: vilja3, alt: "Vilja 3", title: "Testshoot", stylist: "", designer: "", photographer: "@trulskvaqvale", model: "@viljanock" },
    { src: vilja4, alt: "Vilja 4", title: "Testshoot", stylist: "", designer: "", photographer: "@trulskvaqvale", model: "@viljanock" },
];
