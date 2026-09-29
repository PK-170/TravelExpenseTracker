import NavButton from './NavButton'
import { VIEWS } from '../views'

type SidebarProps = {
  active: string
  onSelect: (id: string) => void
}

export default function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="app-gradient relative flex w-64 shrink-0 flex-col overflow-hidden text-white">
      <div className="app-grid pointer-events-none absolute inset-0" />

      <div className="relative flex items-center gap-3 border-b border-white/15 px-5 py-4">
        <span className="grid size-9 place-items-center rounded-lg bg-white/20 text-sm font-bold ring-1 ring-white/30">
          PT
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold tracking-wide">ProjectTracker</p>
          <p className="text-xs text-white/70">Workspace</p>
        </div>
      </div>

      <nav className="relative flex flex-col gap-1 p-3">
        {VIEWS.map((view) => (
          <div key={view.id} className="flex flex-col gap-1">
            <NavButton
              label={view.label}
              isActive={view.id === active}
              onSelect={() => onSelect(view.id)}
              variant="primary"
            />

            {view.children?.map((child) => (
              <NavButton
                key={child.id}
                label={child.label}
                isActive={child.id === active}
                onSelect={() => onSelect(child.id)}
                variant="sub"
              />
            ))}
          </div>
        ))}
      </nav>

      <div className="relative mt-auto border-t border-white/15 px-5 py-4 text-xs text-white/70">
        Signed in as admin
      </div>
    </aside>
  )
}
