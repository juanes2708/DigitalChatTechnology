const btn = document.getElementById('button');

document.getElementById('contactForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_9cbs0g7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      
      document.getElementById("contactForm").reset();

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

const btn_1 = document.getElementById('button');

document.getElementById('planesForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gz2r3zu';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      
      document.getElementById("contactForm").reset();

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

const btn_2 = document.getElementById('button');

document.getElementById('Vacantes Form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_t4fn9ya';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      
      document.getElementById("contactForm").reset();

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});