import { loadCSS } from './aem.js';

function isInUniversalEditor() {
  return window.self !== window.top;
}

function decorateRTEStyles(main) {
  // Pattern: //[classname] TEXT TO BE STYLED //
  const pattern = /\/\/\[([^\]]+)\]\s*(.*?)\s*\/\//g;

  const paragraphs = main.querySelectorAll('p');

  paragraphs.forEach((p) => {
    if (pattern.test(p.textContent)) {
      p.innerHTML = p.innerHTML.replace(pattern, '<span class="$1">$2</span>');
    }
    pattern.lastIndex = 0; // Reset regex for next test
  });
}

function decorateRTEStylesForUE(main) {
  const urlParams = new URLSearchParams(window.location.search);
  const showStyled = urlParams.get('edsRTEShowStyled');

  if (showStyled === 'true') {
    decorateRTEStyles(main);
  }
}

async function loadDelayedScripts() {
  const main = document.querySelector('main');
  loadCSS(`${window.hlx.codeBasePath}/styles/rte-styles.css`);

  if (isInUniversalEditor()) {
    const { registerUEExtensions } = await import('./ue-extensions.js');
    registerUEExtensions();

    decorateRTEStylesForUE(main);
  } else {
    decorateRTEStyles(main);
  }
}

loadDelayedScripts(); // add delayed functionality here
