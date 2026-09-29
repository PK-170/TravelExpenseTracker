import type { View } from '../views'

type HeaderCardProps = {
  view: View
}

export default function HeaderCard({ view }: HeaderCardProps) {
  return (
    <div className="card-glow overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className={`bg-gradient-to-r ${view.accent} h-1.5`} />

      <div className="p-6">
        <h1 className="text-2xl font-semibold text-slate-900">{view.label}</h1>
        <p className="mt-2 text-sm text-slate-600">{view.description}</p>
      </div>
    </div>
  )
}
