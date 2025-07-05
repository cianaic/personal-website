import { AutomationCard } from '@/components/AutomationCard'
import { automations } from '@/data/automations'

export default function AutomationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Automations Playground
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore and manage your workflow automations
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((automation) => (
            <AutomationCard key={automation.id} automation={automation} />
          ))}
        </div>
      </div>
    </div>
  )
}