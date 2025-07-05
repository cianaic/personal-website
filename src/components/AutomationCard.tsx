'use client'

import { useState } from 'react'
import type { Automation } from '@/types/automation'

interface AutomationCardProps {
  automation: Automation
}

export function AutomationCard({ automation }: AutomationCardProps) {
  const [isRunning, setIsRunning] = useState(false)

  const handleRun = async () => {
    setIsRunning(true)
    setTimeout(() => setIsRunning(false), 2000)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {automation.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {automation.description}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          automation.status === 'active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
        }`}>
          {automation.status}
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {automation.trigger.app}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {automation.trigger.event}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-1 border-t-2 border-dashed border-gray-300 dark:border-gray-600 mx-2"></div>
        </div>

        {automation.actions.map((action, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {action.app}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {action.action}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Last run: {automation.lastRun || 'Never'}
        </div>
        <button
          onClick={handleRun}
          disabled={isRunning || automation.status !== 'active'}
          className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
            isRunning || automation.status !== 'active'
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
              : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
          }`}
        >
          {isRunning ? 'Running...' : 'Run Now'}
        </button>
      </div>
    </div>
  )
}