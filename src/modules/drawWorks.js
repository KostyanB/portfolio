import works from '../db/works.json';

const drawWorks = () => {
  const mainContainer = document.querySelector('.main__container');

  mainContainer.innerHTML = works
    .sort((a, b) => a.id - b.id)
    .reduce((acc, item) => {
      const { id, name, demoUrl, gitUrl, imgSrc, stack, description } = item;

      return (
        acc +
        `
            <!-- ${name} -->
            <article class="works__box box${id}">
                <img class="works__box_img" src="${imgSrc}" width="800" height="600" alt="${name}"/>
                <h2 class="works__box_title">
                    <a href="${demoUrl}" aria-label="Перейти на демо-сайт ${name}">
                        ${name}
                    </a>
                </h2>
                <p class="works__box_description">
                    ${description}
                </p>
                <div class="works__box_stack">
                    ${stack}
                </div>
                <div class="works__box_actions">
                    <a href="${demoUrl}" class="works__box_btn">
                        <svg class="demo-${name}">
                            <use xlink:href="img/icons.svg#view" />
                        </svg>
                    </a>
                    <a href="${gitUrl}" class="works__box_btn">
                        <svg class="git-${name}">
                            <use xlink:href="img/icons.svg#github" />
                        </svg>
                    </a>

                </div>
            </article>
        `
      );
    }, '');
};
export default drawWorks;
