document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      form.innerHTML = `
        <p style="text-align:center; font-size:1.4rem; color:#FFD700; font-weight:bold;">
          ✅ Thank you for reaching out to <span style="font-family:'Elephant', serif;">Explore Zambia</span>!<br>
          Your message has been sent successfully — we’ll get back to you soon.
        </p>`;
    } else {
      alert("⚠️ Something went wrong. Please try again later.");
    }
  });
});
