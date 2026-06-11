/* Cursor blob */
const blob = document.getElementById('cursor-blob');

document.addEventListener('mousemove', e => {
  blob.style.transform =
    `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
});

/* Scroll reveal */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => observer.observe(el));

/* Nav shrink */
/* SAFE nav */
const nav = document.querySelector('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.padding =
      window.scrollY > 60
        ? '0.7rem 2.5rem'
        : '1.1rem 2.5rem';
  });
}

/* Contact form */
function handleSubmit(e) {
  e.preventDefault();

  const btn = e.target.querySelector('.form-submit');
  btn.textContent = "Sending...";

  console.log("Form submitted");

  emailjs.sendForm(
    "service_u85oqrs",
    "template_hp6c5wk",
    e.target
  )
  .then((res) => {
    console.log("SUCCESS:", res);
    btn.textContent = "Sent! ✓";
    e.target.reset();

    setTimeout(() => {
      btn.textContent = "Send message ✦";
    }, 3000);
  })
  .catch((err) => {
    console.log("FAILED:", err);
    btn.textContent = "Failed ❌";
  });
}
/* SAFE form binding */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", handleSubmit);
  } else {
    console.warn("Contact form not found!");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealEls.forEach(el => observer.observe(el));
});
document.querySelector("footer span").innerHTML =
  `© ${new Date().getFullYear()} <strong>Vasmitha M</strong> · CS & Design`;