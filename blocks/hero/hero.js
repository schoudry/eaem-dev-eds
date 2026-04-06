export default function decorate(block) {
  const paragraphs = block.querySelectorAll('p');
  
  paragraphs.forEach((p) => {
    const text = p.textContent.trim();
    
    // Check if text starts with "eaem-block"
    if (text.startsWith('eaem-block')) {
      const classNames = text.split(/\s+/).filter(cls => cls.startsWith('eaem-block'));
      
      classNames.forEach(className => {
        block.classList.add(className);
      });
      
      const row = p.closest('div.hero > div');
      if (row) {
        row.remove();
      }
    }
    
    // Check if text starts with "eaem-text"
    if (text.startsWith('eaem-text')) {
      const classNames = text.split(/\s+/).filter(cls => cls.startsWith('eaem-text'));
      
      const textDiv = block.querySelector('[data-aue-prop="text"]');
      if (textDiv) {
        classNames.forEach(className => {
          textDiv.classList.add(className);
        });
      }
      
      const row = p.closest('div.hero > div');
      if (row) {
        row.remove();
      }
    }
  });
}
