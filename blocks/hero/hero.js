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
      // The structure is typically: div.row > div > p
      const row = p.closest('div.hero > div');
      if (row) {
        row.remove();
      }
    }
  });
}
