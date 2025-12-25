export default async function decorate(block) {
  const buttonContainers = block.querySelectorAll('.button-container');
  
  buttonContainers.forEach(container => {
    const link = container.querySelector('a');
    if (link) {
      const textContent = link.textContent;
      container.innerHTML = "Selected root folder: " + textContent;
      container.classList.remove('button-container');
    }
  });
}