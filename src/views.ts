export type View = {
  id: string
  label: string
  description: string
  accent: string
  children?: View[]
}

export const VIEWS: View[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Overview of active projects and team workload.',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    id: 'projects',
    label: 'Projects',
    description: 'All projects, owners, and delivery status.',
    accent: 'from-sky-500 to-cyan-500',
  },
  {
    id: 'RFP',
    label: 'Tasks',
    description: 'Open, in progress, and completed tasks.',
    accent: 'from-fuchsia-500 to-pink-500',
    children: [
      {
        id: 'RFP/my-tasks',
        label: 'My Tasks',
        description: 'Tasks assigned to you.',
        accent: 'from-fuchsia-500 to-pink-500',
      },
      {
        id: 'RFP/team-tasks',
        label: 'Team Tasks',
        description: 'Tasks assigned across the team.',
        accent: 'from-fuchsia-500 to-pink-500',
      },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    description: 'Burndown, velocity, and cycle time.',
    accent: 'from-amber-500 to-orange-500',
  },
]

export function findView(id: string): View {
  return VIEWS.flatMap((view) => [view, ...(view.children ?? [])]).find((view) => view.id === id) ?? VIEWS[0]
}
