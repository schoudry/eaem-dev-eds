export default async function decorate(block) {
  console.log("eaem dynamic select--------", block);
  
  // Find all button-container elements
  const buttonContainers = block.querySelectorAll('.button-container');
  
  buttonContainers.forEach(container => {
    // Get the text content from the link inside
    const link = container.querySelector('a');
    if (link) {
      const textContent = link.textContent;
      // Replace the entire container content with just the text
      container.innerHTML = textContent;
      container.classList.remove('button-container');
    }
  });
}