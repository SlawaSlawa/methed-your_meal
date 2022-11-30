'use strict'

const modalProduct = document.querySelector('.modal_product')
const catalogList = document.querySelector('.catalog__list')

const modalProductTitle = document.querySelector('.modal-product__title')
const modalProductImage = document.querySelector('.modal-product__image')
const modalProductDescription = document.querySelector('.modal-product__description')
const ingredientsList = document.querySelector('.ingredients__list')
const ingredientsCalories = document.querySelector('.ingredients__calories')
const modalProductPriceCount = document.querySelector('.modal-product__price-count')

const product = {
    title: 'Burger Max',
    price: 1000,
    weight: 5000,
    calories: 15000,
    description: 'Big Burger!!!',
    image: 'img/megaburger.jpg',
    ingredients: [
        'Пшеничная булочка',
        'Котлета из говядины',
        'Красный лук',
        'Соус сорчичный',
    ]
}

modalProductTitle.textContent = product.title
modalProductImage.src = product.image
modalProductDescription.textContent = product.description
ingredientsCalories.textContent = product.weight + 'г, ' + 'ккал ' + product.calories
modalProductPriceCount.textContent = product.price

ingredientsList.textContent = ''

const ingredientsListItems = product.ingredients.map(item => {
    const li = document.createElement('li')
    li.classList.add('.ingredients__item')
    li.textContent = item
    return li
})

ingredientsList.append(...ingredientsListItems)

catalogList.addEventListener('click', (evt) => {
    const target = evt.target

    if (target.closest('.product__detail') || target.closest('.product__image')) {
        modalProduct.classList.add('modal_open')
    }
})

modalProduct.addEventListener('click', (evt) => {
    const target = evt.target

    if (target === modalProduct || target.closest('.modal__close')) {
        modalProduct.classList.remove('modal_open')
    }
})

