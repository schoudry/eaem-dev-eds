export default async function decorate(block) {
    if (window.location.hostname.startsWith('author-')) {
        return;
    }
    
    const links = block.querySelectorAll('a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes('open_in_new_tab=true')) {
            link.setAttribute('target', '_blank');
            
            // Remove the open_in_new_tab parameter from href
            const cleanHref = href
                .replace(/[?&]open_in_new_tab=true/, '')
                .replace(/\?$/, ''); // Remove trailing '?' if it's the only param
            
            link.setAttribute('href', cleanHref);
        }
    });
}