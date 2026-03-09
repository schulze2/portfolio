const portfolioProjects = [
  {
    title: 'Projeto 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Layout responsivo para landing page de produto ou servico. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Layout responsivo para landing page de produto ou servico.',
    image: './images/imagem_01.png',
    alt: 'Previa do projeto de landing page',
    link: '#',
    buttonLabel: 'Ver projeto',
  },
  {
    title: 'Projeto 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Layout responsivo para landing page de produto ou servico. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Layout responsivo para landing page de produto ou servico.',
    image: './images/imagem_01.png',
    alt: 'Previa do projeto institucional',
    link: '#',
    buttonLabel: 'Ver projeto',
  },
  {
    title: 'Projeto 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Layout responsivo para landing page de produto ou servico. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Layout responsivo para landing page de produto ou servico.',
    image: './images/imagem_01.png',
    alt: 'Previa do projeto de portfolio pessoal',
    link: '#',
    buttonLabel: 'Ver projeto',
  },
  {
    title: 'Projeto 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Layout responsivo para landing page de produto ou servico. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Layout responsivo para landing page de produto ou servico.',
    image: './images/imagem_01.png',
    alt: 'Previa do projeto de painel administrativo',
    link: '#',
    buttonLabel: 'Ver projeto',
  },
];

const portfolioGrid = document.querySelector('#portfolio-grid');

if (portfolioGrid) {
  const cardsFragment = document.createDocumentFragment();

  portfolioProjects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'portfolio-card';

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.alt;

    const content = document.createElement('div');
    content.className = 'portfolio-card-content';

    const title = document.createElement('h2');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const link = document.createElement('a');
    link.className = 'primary-button';
    link.href = project.link;
    link.textContent = project.buttonLabel;

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(link);

    card.appendChild(image);
    card.appendChild(content);

    cardsFragment.appendChild(card);
  });

  portfolioGrid.appendChild(cardsFragment);
}
