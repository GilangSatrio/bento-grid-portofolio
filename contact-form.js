const contactForm = document.getElementById('contactForm');
const heroContactButton = document.querySelector('.hero-actions .button.ghost');

if (heroContactButton) heroContactButton.href = '#contact';

if (contactForm) {
  // FormSubmit sends directly from the web form; it does not invoke a mail client.
  contactForm.action = 'https://formsubmit.co/gilangsjw@gmail.com';
  contactForm.method = 'POST';
  contactForm.onsubmit = null;

  const subject = document.createElement('input');
  subject.type = 'hidden';
  subject.name = '_subject';
  subject.value = 'New portfolio contact message';
  contactForm.prepend(subject);

  const captcha = document.createElement('input');
  captcha.type = 'hidden';
  captcha.name = '_captcha';
  captcha.value = 'false';
  contactForm.prepend(captcha);
}
