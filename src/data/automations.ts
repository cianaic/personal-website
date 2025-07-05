import type { Automation } from '@/types/automation'

export const automations: Automation[] = [
  {
    id: '1',
    name: 'Strava Activity to Calendar',
    description: 'Automatically log your Strava workouts to Google Calendar with AI-powered summaries',
    status: 'active',
    trigger: {
      app: 'Strava',
      event: 'New activity created',
    },
    actions: [
      {
        app: 'AI by Zapier',
        action: 'Analyze activity data',
      },
      {
        app: 'Google Calendar',
        action: 'Create detailed event',
      },
    ],
    lastRun: '2 hours ago',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
]