export default async function decorate(block) { 
  //In Author Universal editor, remove button-container class from p elements and remove classes from anchor tags inside
  const buttonContainers = block.querySelectorAll('p.button-container');
  buttonContainers.forEach(p => {
    p.className = '';
    const anchor = p.querySelector('a');
    if (anchor) {
      anchor.className = '';
    }
  });
}