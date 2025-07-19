document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicationForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Application submitted successfully!');
        form.reset();
    });
});
