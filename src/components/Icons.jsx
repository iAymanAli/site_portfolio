export function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10m-4-4 4 4-4 4" />
    </svg>
  )
}

export function ThemeIcon({ isDark }) {
  return isDark ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
    </svg>
  )
}

export function WalletIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
      <path d="M12 19.5h35a5 5 0 0 1 5 5v25a5 5 0 0 1-5 5H17a7 7 0 0 1-7-7v-25a3 3 0 0 1 3-3Z" />
      <path d="M12 19.5 44 12a5 5 0 0 1 6 3.7l.8 3.8M10 28h42" />
      <path d="M42 37h13v11H42a5.5 5.5 0 0 1 0-11Z" />
      <circle cx="44" cy="42.5" r="1" />
    </svg>
  )
}