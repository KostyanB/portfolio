import links from '../db/links.json';

const drawLinks = () => {
  const headerLinks = document.querySelector('.header__links');

  headerLinks.innerHTML = links.reduce((acc, item) => {
    const { name, link } = item;

    return (
      acc +
      `
        <a href="${link}" class="header__links_soc">
          <svg class="${name}">
            <use xlink:href="img/icons.svg#${name}" />
          </svg>
        </a>
      `
    );
  }, '');
};
export default drawLinks;
