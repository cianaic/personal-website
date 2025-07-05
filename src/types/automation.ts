export interface AutomationTrigger {
  app: string
  event: string
  icon?: string
}

export interface AutomationAction {
  app: string
  action: string
  icon?: string
}

export interface Automation {
  id: string
  name: string
  description: string
  status: 'active' | 'inactive' | 'draft'
  trigger: AutomationTrigger
  actions: AutomationAction[]
  lastRun?: string
  createdAt: string
  updatedAt: string
}