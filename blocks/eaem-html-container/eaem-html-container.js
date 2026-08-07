/**
 * Decodes a base64 string back to UTF-8 HTML markup.
 * Falls back to the raw value if it isn't valid base64.
 */
function decodeBase64(value) {
  if (!value) return '';
  try {
    return decodeURIComponent(escape(window.atob(value)));
  } catch (e) {
    return value;
  }
}

/**
 * <script> elements inserted via innerHTML are inert by spec.
 * Replace each one with a freshly created <script> (same attributes/content)
 * so the browser actually executes it once it's back in the DOM.
 */
function executeInjectedScripts(container) {
  container.querySelectorAll('script').forEach((oldScript) => {
    const newScript = document.createElement('script');
    [...oldScript.attributes].forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });
    newScript.textContent = oldScript.textContent;
    oldScript.replaceWith(newScript);
  });
}

export default function decorate(block) {
  const [nameRow, htmlRow] = [...block.children];

  const containerName = nameRow?.textContent?.trim() || '';
  if (containerName) {
    block.dataset.containerName = containerName;
  }

  const encodedHtml = htmlRow?.textContent?.trim() || '';
  const decodedHtml = decodeBase64(encodedHtml);

  block.innerHTML = decodedHtml;
  executeInjectedScripts(block);
}
