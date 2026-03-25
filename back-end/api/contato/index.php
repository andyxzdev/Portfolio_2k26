<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "JSON inválido"]);
    exit();
}

// Validação
if (
    empty($data['nome']) ||
    empty($data['email']) ||
    empty($data['telefone']) ||
    empty($data['tipoProjeto']) ||
    empty($data['mensagem'])
) {
    http_response_code(400);
    echo json_encode(["error" => "Preencha todos os campos"]);
    exit();
}

// Sanitização
$nome = htmlspecialchars($data['nome']);
$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$telefone = htmlspecialchars($data['telefone']);
$tipoProjeto = htmlspecialchars($data['tipoProjeto']);
$mensagem = htmlspecialchars($data['mensagem']);

if (!$email) {
    http_response_code(400);
    echo json_encode(["error" => "Email inválido"]);
    exit();
}

// ==========================
// PHPMailer
// ==========================
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // CONFIG SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'andyxdevcontact@gmail.com';
    $mail->Password = 'qhlojoylgofrmjzv';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // REMETENTE E DESTINO
    $mail->setFrom('andyxdevcontact@gmail.com', 'Site AndxDev');
    $mail->addAddress('andyxdevcontact@gmail.com');

    // CONTEÚDO
    $mail->isHTML(true);
    $mail->Subject = 'Novo contato - andxdev.com.br';

    $mail->Body = "
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> $nome</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Telefone:</strong> $telefone</p>
        <p><strong>Tipo de projeto:</strong> $tipoProjeto</p>
        <p><strong>Mensagem:</strong><br>$mensagem</p>
    ";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Mensagem enviada com sucesso 🚀"
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "Erro ao enviar email",
        "details" => $mail->ErrorInfo
    ]);
}