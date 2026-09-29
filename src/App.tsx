import { useState } from 'react'
import HeaderCard from './components/HeaderCard'
import Sidebar from './components/Sidebar'
import { findView } from './views'

export default function App() {
  const [active, setActive] = useState('dashboard')
  const current = findView(active)

  return (
    <div className="flex h-full bg-slate-50 text-slate-900">
      <Sidebar active={active} onSelect={setActive} />

      <main className="panel-glow flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-3xl">
          <HeaderCard view={current} />
        </div>
      </main>
    </div>
  )
}
