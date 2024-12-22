// --------------------------------------------------------------------------------------------- 
function toggleIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    const chatbotStart = document.querySelector(".chat-boot");
    const chatbotStop = document.querySelector(".chat-boot-cancle");
 
    console.log("Opening iframe...");
    window.scrollTo(0,100)
    chatbotStart.style.display = "none";     // Hide start button
    chatbotStop.style.display = "block";     // Show cancel button
    iframeContainer.style.display = "block"; // Show iframe container
}

function chatbootcancle() {
    const iframeContainer = document.getElementById('iframeContainer');
    const chatbotStart = document.querySelector(".chat-boot");
    const chatbotStop = document.querySelector(".chat-boot-cancle");

    console.log("Closing iframe...");

    chatbotStop.style.display = "none";      // Hide cancel button
    chatbotStart.style.display = "block";    // Show start button
    iframeContainer.style.display = "none";  // Hide iframe container
} 
