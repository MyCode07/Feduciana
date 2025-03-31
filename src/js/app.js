import "./parts/sliders.js";
import "./parts/popup.js";
import "./parts/menu.js";
import { accorden } from "./static/accordeon.js";
import { Fancybox } from "@fancyapps/ui";

accorden();

Fancybox.bind("[data-fancybox]", {
    Carousel: {
        Panzoom: {
        },
    },
});