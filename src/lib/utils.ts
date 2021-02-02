export function loadScript(src: string) {
  return new Promise(function(resolve, reject) {
    const s = document.createElement('script')
    s.src = src
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}
