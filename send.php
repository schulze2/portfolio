<?php
require 'vendor/autoload.php';

// Importa as classes necessárias do PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Carrega as variáveis de ambiente
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Função para redirecionar com status
function redirectWithStatus(string $status): void {
    header('Location: contact.php?status=' . urlencode($status));
    exit;
}

// Verifica se o método de requisição é POST
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Verifica se as variáveis de ambiente estão configuradas
    if (empty($_ENV['GMAIL_USER']) || empty($_ENV['GMAIL_PASS'])) {
        redirectWithStatus('config_error');
    }

    // obtém os dados e remove os espaços em branco
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');

    // Validação básica dos campos
    if ($name === '' || $email === '' || $subject === '' || $message === '') {
        redirectWithStatus('invalid_input');
    }
    // Validação do endereço de e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        redirectWithStatus('invalid_email');
    }

    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();

        $mail->Host = 'smtp.gmail.com';

        $mail->SMTPAuth = true;

        $mail->Username = $_ENV['GMAIL_USER'];
        $mail->Password = $_ENV['GMAIL_PASS'];

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        
        $mail->Port = 587;

        $mail->setFrom($_ENV['GMAIL_USER'], 'Site - Formulario de Contato');
        $mail->addAddress($_ENV['GMAIL_USER']);
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = 'Nova mensagem: ' . $name;

        $nameSafe = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $emailSafe = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        $subjectSafe = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
        $messageSafe = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

        $mail->Body = "
            <h2>Nova mensagem de contato</h2>
            <p><strong>Nome:</strong> {$nameSafe}</p>
            <p><strong>Email:</strong> {$emailSafe}</p>
            <p><strong>Assunto:</strong> {$subjectSafe}</p>
            <p><strong>Mensagem:</strong><br>{$messageSafe}</p>
            ";
        $mail->AltBody = "Nome: {$name}\nEmail: {$email}\nAssunto: {$subject}\n\nMensagem:\n{$message}";
        
        $mail->send();
        redirectWithStatus('success');
    } catch (Exception $e) {
        redirectWithStatus('send_error');
    }
} else {
    redirectWithStatus('invalid_request');
}