// Menu Toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
  });
  
  // Tab Functionality
  function openTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    const tabButtons = document.getElementsByClassName('tab-button');
  
    // Hide all tab contents and remove active class from buttons
    for (let content of tabContents) {
      content.classList.remove('active');
    }
    for (let button of tabButtons) {
      button.classList.remove('active');
    }
  
    // Show selected tab and activate button
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  
  // Form Submission
  document.getElementById('batismo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      igreja: document.getElementById('igreja').value,
      nome: document.getElementById('nome').value,
      funcao: document.getElementById('funcao').value,
      sobrenome: document.getElementById('sobrenome').value,
      telefone: document.getElementById('telefone').value,
      email: document.getElementById('email').value,
      comentario: document.getElementById('comentario').value
    };
  
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    e.target.reset();
  });
  
  // Add animation classes when elements come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeIn');
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe all cards and schedule entries
  document.querySelectorAll('.card, .schedule-entry').forEach(element => {
    observer.observe(element);
  });