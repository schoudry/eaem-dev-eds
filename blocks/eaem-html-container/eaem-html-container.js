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

export default function decorate(block) {
  const [nameRow, htmlRow] = [...block.children];

  const containerName = nameRow?.textContent?.trim() || '';
  if (containerName) {
    block.dataset.containerName = containerName;
  }

  const encodedHtml = htmlRow?.textContent?.trim() || '';
  const decodedHtml = decodeBase64(encodedHtml);

  block.innerHTML = decodedHtml;
}
