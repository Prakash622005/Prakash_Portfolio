// Form Submission Logic
document.getElementById('portfolioContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const status = document.getElementById('formStatus');
    const name = document.getElementById('userName').value;
    
    // Simulate an API call
    status.innerHTML = `<span class="text-violet">Sending message...</span>`;
    
    setTimeout(() => {
        status.innerHTML = `<i class="fas fa-check-circle text-success"></i> Thanks, ${name}! Your message has been sent successfully.`;
        this.reset();
    }, 1500);
});