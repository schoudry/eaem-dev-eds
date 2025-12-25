export default async function decorate(block) {
  console.log('--parent---', window.parent?.location.href);
  
  // Remove button-container class from p elements
  const buttonContainers = block.querySelectorAll('p.button-container');
  buttonContainers.forEach(p => {
    p.classList.remove('button-container');
  });
}