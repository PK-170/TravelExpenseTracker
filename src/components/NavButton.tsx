type NavButtonProps = {
  label: string
  isActive: boolean
  onSelect: () => void
  variant: 'primary' | 'sub'
}

const styles = {
  primary: (isActive: boolean) =>
    isActive
      ? 'bg-white text-slate-900 shadow-sm'
      : 'text-white/80 hover:bg-white/15 hover:text-white',
  sub: (isActive: boolean) =>
    isActive
      ? 'bg-white/25 font-medium text-white'
      : 'text-white/65 hover:bg-white/10 hover:text-white',
}

export default function NavButton({ label, isActive, onSelect, variant }: NavButtonProps) {
  return (
    <button
      type="button"
      aria-current={isActive ? 'page' : undefined}
      onClick={onSelect}
      className={`flex items-center gap-2 rounded-md text-left text-sm transition-colors ${
        variant === 'sub' ? 'py-2 pl-6 pr-3' : 'px-3 py-2 font-medium'
      } ${styles[variant](isActive)}`}
    >
      {variant === 'sub' && <span className="size-1.5 rounded-full bg-current opacity-70" />}
      {label}
    </button>
  )
}
