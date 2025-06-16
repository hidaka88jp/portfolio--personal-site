export function setThemeColor(color: string) {
  if (typeof document === 'undefined') return; // Prevent DOM access during server-side rendering
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', color);
}
