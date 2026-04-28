export function registerUEExtensions() {
  const SELECTION_MESSAGE_TYPE = "eds-user-text-selection";
  let selectionDebounce;

  const postSelectedTextToAIOExtensions = (text) => {
    const payload = { type: SELECTION_MESSAGE_TYPE, text };
    let rootDocument = document;

    try {
      if (window.parent && window.parent !== window) {
        rootDocument = window.parent.document;
      }
    } catch {}

    const iframes = rootDocument.querySelectorAll('iframe[data-uix-guest="true"]');

    iframes.forEach((frame) => {
      const win = frame.contentWindow;

      if (!win) {
        return;
      }

      let targetOrigin = "*";

      try {
        if (frame.getAttribute("src")) {
          targetOrigin = new URL(
            frame.getAttribute("src"),
            rootDocument.baseURI || document.baseURI,
          ).origin;
        }
      } catch {
        targetOrigin = "*";
      }

      try {
        win.postMessage(payload, targetOrigin);
      } catch (err) {
        console.warn("postMessage to iframe failed", err);
      }
    });
  };

  document.addEventListener("selectionchange", () => {
    clearTimeout(selectionDebounce);
    selectionDebounce = setTimeout(() => {
      const text = window.getSelection()?.toString() ?? "";
      if (text.trim()) {
        postSelectedTextToAIOExtensions(text);
      }
    }, 200);
  });
}
