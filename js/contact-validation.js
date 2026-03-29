document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
  };
//  Regex simples para validar e-mails
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Valida um campo específico e atualiza o estilo
  function validateField(fieldName) {
    const field = fields[fieldName];
    const value = field.value.trim();
    let isValid = true;

    if (fieldName === 'name' || fieldName === 'subject') {
      isValid = value.length >= 3;
    } else if (fieldName === 'email') {
      isValid = emailRegex.test(value);
    } else if (fieldName === 'message') {
      isValid = value.length >= 10;
    }

    field.classList.toggle('field-invalid', !isValid);
    field.setAttribute('aria-invalid', String(!isValid));
    field.style.borderColor = isValid ? '' : '#ff6b6b';
    field.style.outline = isValid ? '' : '1px solid #ff6b6b';

    return isValid;
  }

  // Valida o formulário antes de enviar
  function validateForm(event) {
    const errors = [];

    if (!validateField('name')) errors.push('Nome deve ter pelo menos 3 caracteres.');
    if (!validateField('email')) errors.push('Informe um e-mail valido.');
    if (!validateField('subject')) errors.push('Assunto deve ter pelo menos 3 caracteres.');
    if (!validateField('message')) errors.push('Mensagem deve ter pelo menos 10 caracteres.');

    if (!errors.length) {
      Object.keys(fields).forEach(function (fieldName) {
        fields[fieldName].value = fields[fieldName].value.trim();
      });
      return;
    }

    event.preventDefault();
    window.alert(errors.join('\n'));
    const firstInvalid = form.querySelector('.field-invalid');
    if (firstInvalid) firstInvalid.focus();
  }

  Object.keys(fields).forEach(function (fieldName) {
    fields[fieldName].addEventListener('input', function () {
      validateField(fieldName);
    });
  });

  form.addEventListener('submit', validateForm);
});
