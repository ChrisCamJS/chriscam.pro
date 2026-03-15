<?php
// Handle CORS and preflight requests for the React frontend
header("Access-Control-Allow-Origin: *"); // Tighten this to 'https://chriscam.pro' once live!
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed."]);
    exit();
}

// Get the raw POST data from the React fetch API
$data = json_decode(file_get_contents("php://input"));

// HONEYPOT CHECK
// If the botcheck field has ANY content, silently accept it without sending an email
if (!empty($data->botcheck)) {
    http_response_code(200);
    echo json_encode(["message" => "Message sent."]);
    exit();
}

// Sanitize inputs heavily
$name = htmlspecialchars(strip_tags(trim($data->name ?? '')));
$email = filter_var(trim($data->email ?? ''), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($data->message ?? '')));

// Validate data
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid input data."]);
    exit();
}

// Set up the email parameters
$to = "chris@maracentral.com";
$subject = "New Lead from ChrisCam.pro - $name";
$body = "You have received a new message from your portfolio website.\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

$headers = "From: noreply@chriscam.pro\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send the email and return a JSON response to React
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["message" => "Message sent successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Server error. Unable to send email."]);
}
?>