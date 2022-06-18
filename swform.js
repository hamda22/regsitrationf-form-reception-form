const multistepForm = document.querySelector("[data-multi-step]");
const formsStep = [...multistepForm.querySelectorAll("[data-step]")];
let currentStep = formsStep.findIndex((step, index) => {
  return step.classList.contains("");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
  
}

multistepForm.addEventListener("click", (e) => {
  if (e.target.matches("[data-next]")) {
    currentStep += 1;
  } else if (e.target.matches("[data-previous]")) {
    currentStep -= 1;
  }
  showCurrentStep();

});
function showCurrentStep() {
  formsStep.forEach((step, index) => {
    formsStep[currentStep].classList.add("block", index === currentStep);
    formsStep[currentStep].classList.remove("hidden", index === currentStep);
  });
}

