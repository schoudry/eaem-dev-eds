export default async function decorate(block) {
    const links = block.querySelectorAll('a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes('open_in_new_tab=true')) {
            link.setAttribute('target', '_blank');
        }
    });
}