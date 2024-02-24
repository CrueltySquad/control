// Get references to chatbox and user input elements
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Function to generate a chatbot response
function generateResponse(userMessage) {
	// Add some basic chatbot logic here
	const response = `Chatbot: ${userMessage.toUpperCase()}`;
	return response;
}

// Function to handle user message submission
function handleUserMessage() {
	// Get user message from input
	const userMessage = userInput.value.trim();

	// Generate a response
	const response = generateResponse(userMessage);

	// Display the response in the chatbox
	chatbox.innerHTML += `<p>${response}</p>`;

	// Clear user input
	userInput.value = '';
}

// Add event listener to send button
const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', handleUserMessage);

// Add event listener to user input for Enter key press
userInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		handleUserMessage();
	}
});
