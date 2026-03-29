<?php
$statusMessages = [
    'success' => 'Mensagem enviada com sucesso. Obrigado pelo contato!',
    'send_error' => 'Nao foi possivel enviar sua mensagem agora. Tente novamente em instantes.',
    'config_error' => 'Configuracao de e-mail incompleta no servidor.',
    'invalid_input' => 'Preencha todos os campos obrigatorios.',
    'invalid_email' => 'Informe um e-mail valido.',
    'invalid_request' => 'Metodo de envio invalido.'
];

// Obtém o status da URL e define a mensagem de alerta correspondente
$status = strtolower(trim((string)($_GET['status'] ?? '')));
$alertMessage = $statusMessages[$status] ?? '';
?>
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Germano Schulze Jr. | Contato</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/reset.css" />
    <link rel="stylesheet" href="css/container.css" />
    <link rel="stylesheet" href="css/nav.css" />
    <link rel="stylesheet" href="css/shared.css" />
    <link rel="stylesheet" href="css/contact.css" />
  </head>
  <body>
    <header class="header">
      <div class="container">
        <a href="index.html" class="logo">
          <img src="./images/Logo.svg" alt="Logo" />
        </a>

        <button
          class="menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="nav-menu"
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav class="nav-menu" id="nav-menu">
          <ul class="nav-list">
            <li class="nav-mobile-logo">
              <a class="nav-link" href="index.html"
                ><img src="./images/Logo.svg" alt="Logo"
              /></a>
            </li>
            <li><a class="nav-link" href="about.html">sobre</a></li>
            <li><a class="nav-link" href="portfolio.html">Portfolio</a></li>
            <li><a class="nav-link" href="news.html">Novidades</a></li>
            <li><a class="nav-link" href="contact.php" aria-current="page">Contato</a></li>
          </ul>
        </nav>

        <button
          class="menu-overlay"
          type="button"
          aria-label="Fechar menu"
        ></button>
      </div>
    </header>

    <main>
      <div class="page-heading">
        <h1>Contato</h1>
      </div>

      <div class="container">
        <section class="contact-section" aria-label="Formulario de contato">
          <form class="contact-form" id="contact-form" action="send.php" method="post" novalidate>
            <h2>Vamos conversar</h2>
            <p>
              Preencha os campos abaixo e eu entro em contato com voce o mais
              rapido possivel.
            </p>

            <div class="contact-form-fields">
              <div class="contact-form-left">
                <label for="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  required
                />

                <label for="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu email@exemplo.com"
                  required
                />

                <label for="subject">Assunto</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Digite o assunto"
                  required
                />
              </div>

              <div class="contact-form-right">
                <label for="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Escreva sua mensagem"
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" class="primary-button">
              Enviar mensagem
            </button>
          </form>
        </section>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-social">
            <a href="https://github.com/schulze2" target="_blank">Github</a>
            <a href="https://www.instagram.com/germano_schulze/" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/in/germanosjunior/" target="_blank">LinkedIn</a>
          </div>
          <div class="footer-copyright">
            <p>Copyright © 2026 Germano Schulze. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    
    <?php if ($alertMessage !== ''): ?>
      <script>
        alert(<?php echo json_encode($alertMessage, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>);
      </script>
    <?php endif; ?>

    <script src="js/contact-validation.js"></script>
    <script src="js/menu-mobile.js"></script>
  </body>
</html>
