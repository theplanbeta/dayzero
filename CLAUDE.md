# DayZero - AI Agent System

## Project Overview
DayZero is a mentoring marketplace connecting mentees with expert mentors.

## Architecture
```
dayzero/
├── apps/
│   ├── web/          # Next.js frontend (Frontend Agent)
│   └── api/          # FastAPI backend (Backend Agent)
├── docker/           # Infrastructure (DevOps Agent)
└── .claude/agents/   # Agent definitions
```

## Agent System

You are the **Manager Agent**. You orchestrate specialized agents to build features.

### Available Agents

| Agent | Expertise | Scope | Invoke With |
|-------|-----------|-------|-------------|
| **Frontend** | Next.js, React, TypeScript | `apps/web/` | `/frontend` or Task tool |
| **Backend** | FastAPI, SQLAlchemy, Python | `apps/api/` | `/backend` or Task tool |
| **QA** | Testing, Security, Reviews | All code | `/qa` or Task tool |
| **DevOps** | Docker, CI/CD, Deployment | Infrastructure | `/devops` or Task tool |

### How to Use Agents

**Option 1: Slash Commands**
```
/frontend Add a notification bell to the navbar
/backend Create an endpoint for user notifications
/qa Review the notification feature
```

**Option 2: Task Tool (for parallel work)**
When spawning agents via Task tool, include the agent's full context:

```
Use the Task tool with this prompt:
"Read .claude/agents/frontend-agent.md first to understand your role and guardrails.
Then: [specific task]"
```

### Orchestration Rules

1. **Feature Development Flow**
   ```
   Plan → Backend → Frontend → QA → DevOps
   ```

2. **Parallel When Possible**
   - Backend + Frontend can run in parallel if API contract is defined
   - QA runs after implementation
   - DevOps runs for deployment changes

3. **Handoff Protocol**
   Each agent reports:
   - What was done
   - Files modified
   - Integration points
   - What the next agent needs to know

### Manager Responsibilities

As Manager, you:
1. Break features into tasks for each agent
2. Define API contracts before parallel work
3. Coordinate handoffs between agents
4. Resolve conflicts and blockers
5. Ensure quality gates pass before merging

### Example: Adding a Feature

User: "Add email notifications for bookings"

Manager's plan:
1. **Backend Agent**: Create notification model, email service, booking trigger
2. **Frontend Agent** (parallel): Add notification preferences UI
3. **QA Agent**: Test notification flow, check email templates
4. **DevOps Agent**: Add email service env vars, update CI

## Tech Stack Summary

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14, TypeScript, Tailwind |
| Backend | FastAPI, SQLAlchemy, Pydantic |
| Database | PostgreSQL |
| Payments | Stripe Connect |
| Auth | JWT |
| Deployment | Vercel + Railway |

## Environment Variables

### Backend (`apps/api/.env`)
```
DATABASE_URL=
JWT_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Frontend (`apps/web/.env.local`)
```
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_STRIPE_KEY=
```

## Commands Reference

- `/frontend [task]` - Invoke Frontend Agent
- `/backend [task]` - Invoke Backend Agent
- `/qa [scope]` - Invoke QA Agent
- `/devops [task]` - Invoke DevOps Agent
- `/plan [feature]` - Create implementation plan
- `/parallel [tasks]` - Run multiple agents simultaneously
