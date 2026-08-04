export default function decorate(block) {
  const [row] = [...block.children];
  const containerName = row?.textContent?.trim() || '';

  if (containerName) {
    block.dataset.containerName = containerName;
  }

  row?.remove();
}
