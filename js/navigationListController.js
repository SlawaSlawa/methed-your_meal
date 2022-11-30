import { navigationList, navigationListItems, catalogTitle } from "./elements.js"

export const navigationListController = () => {
    navigationList.addEventListener('click', (evt) => {
        const categoryItem = evt.target.closest('.navigation__button')
        
        if (!categoryItem) return

        navigationListItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('navigation__button_active')
                catalogTitle.textContent = item.textContent
            } else {
                item.classList.remove('navigation__button_active')
            }
        })
    })
}