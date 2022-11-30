'use strict'
import { 
    modalProduct,
    catalogList,
} from './elements.js';

import { createCardProduct } from './createCardProduct.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';

catalogList.addEventListener('click', (evt) => {
    const target = evt.target

    if (target.closest('.product__detail') || target.closest('.product__image')) {
        openModal(product)
    }
})

modalProduct.addEventListener('click', (evt) => {
    const target = evt.target

    if (target === modalProduct || target.closest('.modal__close')) {
        modalProduct.classList.remove('modal_open')
    }
})

const init = () => {
    renderListProduct()
    navigationListController()
}

init()