export default function decorate(block) {
  // Find all paragraphs in the block
  const paragraphs = block.querySelectorAll('p');
  
  paragraphs.forEach((p) => {
    const text = p.textContent.trim();
    
    // Check if text starts with "eaem-block"
    if (text.startsWith('eaem-block')) {
      // Extract class names (space-separated)
      const classNames = text.split(/\s+/).filter(cls => cls.startsWith('eaem-block'));
      
      // Apply classes to the block wrapper
      classNames.forEach(className => {
        block.classList.add(className);
      });
      
      // Remove the row containing this paragraph
      const row = p.closest('div.hero > div');
      if (row) {
        row.remove();
      }
    }
    
    // Check if text starts with "eaem-text"
    if (text.startsWith('eaem-text')) {
      // Extract class names (space-separated)
      const classNames = text.split(/\s+/).filter(cls => cls.startsWith('eaem-text'));
      
      // Find the div with data-aue-prop="text" in the block
      const textDiv = block.querySelector('[data-aue-prop="text"]');
      if (textDiv) {
        // Apply classes to the text div
        classNames.forEach(className => {
          textDiv.classList.add(className);
        });
      }
      
      // Remove the row containing this paragraph
      const row = p.closest('div.hero > div');
      if (row) {
        row.remove();
      }
    }
  });
}
