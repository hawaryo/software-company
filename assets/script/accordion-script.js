const faqItems = document.querySelectorAll(".faq-item");

// Set the first answer to active by default
if (faqItems.length > 0) {
  const firstItem = faqItems[0];
  firstItem.classList.add("active");
  const firstIcon = firstItem.querySelector("svg");
  firstIcon.setAttribute("width", "20");
  firstIcon.setAttribute("height", "20");
  firstIcon.innerHTML = `
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
  `;
}

faqItems.forEach((item) => {
  const question = item.querySelector(".question");
  const icon = question.querySelector("svg");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Hide all answers and reset icons
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      const faqIcon = faq.querySelector("svg");
      faqIcon.setAttribute("width", "16");
      faqIcon.setAttribute("height", "16");
      faqIcon.innerHTML = `
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        `;
    });

    if (!isActive) {
      // Activate the clicked item and change its icon to 'x'
      item.classList.add("active");
      icon.setAttribute("width", "20");
      icon.setAttribute("height", "20");
      icon.innerHTML = `
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        `;
    }
  });
});
