import { Boxfilter } from "./BoxFilter.js";
import { Stamp } from "./Stamp.js";
import { ModalImg } from "./ModalImg.js";
import { BoxImage } from "./BoxImage.js";

export class GestionnaireEnchere{
    #stamps = [];
    #modalImg;
    #boxImage;
    #boxFilter;

    constructor(){
        if (!GestionnaireEnchere.instance) GestionnaireEnchere.instance = this;
        else throw new Error("impossible de dupliquer cette classe");

        if(document.querySelector('[data-js-boxFilter]') != null) 
            this.#boxFilter = new Boxfilter(document.querySelector('[data-js-boxFilter]'));
        if(document.querySelector('[data-js-modal="img"]') != null) 
            this.#modalImg = new ModalImg(document.querySelector('[data-js-modal="img"]'));
        if(document.querySelector('[data-js-box="image"]') != null) 
            this.#boxImage = new BoxImage(document.querySelector('[data-js-box="image"]'));
        this.init();
    }

    init() {

        document.querySelectorAll('[data-js-stamp]').forEach(stamp => {
            this.#stamps.push(new Stamp(stamp));
        });

        document.addEventListener('ouvrirImage', (e) => {
            this.#modalImg.ouvrirModal(e.detail);
        });
    }

    openBoxFilter() {
        this.elForm.classList.toggle('non-exist');
        this.elFormOpen.classList.toggle('inverse');
    }

    hoverBoxImage() {

    }
}

