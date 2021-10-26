import works from '../db/works.json';

const drawWorks = () => {
    const mainContainer = document.querySelector('.main__container');

    mainContainer.innerHTML = works.reduce((acc, item) => {
        const { id, name, demoUrl, gitUrl, imgSrc, stack, description} = item;

        return (acc + `
            <!-- ${name} -->
            <article class="works__item item${id}">
                <a href="${demoUrl}" class="works__link link${id}">
                    <img src="${imgSrc}" alt="${name}" class="works__image" title="${name}">
                </a>
                <div class="works__about">
                    <p class="works__stack">${stack}</p>
                    <p class="works__description">${description}</p>
                    <a href="${demoUrl}" class="works__git">
                        <button class="button button_arrow">Демо</button>
                    </a>
                    <a href="${gitUrl}" class="works__git">
                        <button class="button button_arrow">Код на GitHub</button>
                    </a>
                </div>
            </article>
        `);
    }, '');
};
export default drawWorks;