export default async function decorate(block) {
    if (window.location.hostname.startsWith('author-')) {
        return;
    }
    
    const links = block.querySelectorAll('a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes('open_in_new_tab=true')) {
            link.setAttribute('target', '_blank');
            
            const cleanHref = href
                .replace(/[?&]open_in_new_tab=true/, '')
                .replace(/\?$/, ''); 
            
            link.setAttribute('href', cleanHref);
        }
    });
}