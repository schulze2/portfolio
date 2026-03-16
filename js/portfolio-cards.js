const portfolioProjects = [
  {
    title: 'projeto Site Pessoal',
    description:
      'Projeto de site pessoal desenvolvido para o primeiro trabalho da matéria Desenvolvimento para aplicações web, utilizando HTML, CSS e JavaScript.',
    image: './images/web.png',
    alt: 'Previa do projeto de site pessoal',
    link: 'https://github.com/schulze2/portfolio',
    buttonLabel: 'Ver projeto',
  },
  {
    title: 'NLW eSports',
    description:
      'Projeto constuído do evento Next Level Week da Rocketseat.',
    image: './images/nlw.png',
    alt: 'Previa do projeto institucional',
    link: 'https://github.com/schulze2/NLW-esports-explorer',
    buttonLabel: 'Ver projeto',
  },
  {
    title: 'Busca Rápida e Fácil de Atletas Brasileiros!',
    description:
      'Projeto constuído do evento Imersão DEV com Google Gemini.',
    image: './images/Atletas.png',
    alt: 'Previa do projeto previa a imersão DEV com google gemini',
    link: 'https://github.com/schulze2/imersao-alura-gemini',
    buttonLabel: 'Ver projeto',
  },
  {
    title: 'Projeto Agenda de Contatos',
    description:
      'Projeto constuído no curso do Luiz Otávio Miranda, utilizando Django para criar uma aplicação web de agenda de contatos.',
    image: './images/agenda.png',
    alt: 'Previa do projeto Agenda',
    link: 'https://github.com/schulze2/Agenda',
    buttonLabel: 'Ver projeto',
  },
  {
    title: 'Projeto Blog com Django',
    description:
      'Projeto de blog desenvolvido durante o curso de Python do Luiz Otávio Miranda, usando Django.',
    image: './images/blog.png',
    alt: 'Previa do projeto Blog',
    link: 'https://github.com/schulze2/projeto-blog-django',
    buttonLabel: 'Ver projeto',
  },
];

const portfolioGrid = document.querySelector('#portfolio-area');

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
    link.setAttribute('target', '_blank');
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
