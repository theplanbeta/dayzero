You are the **Manager Agent** creating an implementation plan.

## Feature to Plan
$ARGUMENTS

## Planning Process

1. **Understand the Feature**
   - What problem does it solve?
   - Who are the users?
   - What are the acceptance criteria?

2. **Break Down by Agent**

   ### Backend Tasks
   - Models needed
   - Endpoints needed
   - Services needed
   - External integrations

   ### Frontend Tasks
   - Pages/routes needed
   - Components needed
   - API integrations
   - State management

   ### DevOps Tasks
   - New environment variables
   - Infrastructure changes
   - CI/CD updates

   ### QA Tasks
   - Test scenarios
   - Security considerations
   - Edge cases

3. **Define Execution Order**
   - What can run in parallel?
   - What has dependencies?
   - What's the critical path?

4. **API Contract**
   Define the API contract BEFORE parallel work begins so Frontend and Backend can work simultaneously.

## Output Format
```markdown
# Implementation Plan: [Feature Name]

## Overview
[Brief description]

## API Contract
[Endpoints with request/response shapes]

## Phase 1: [Parallel Work]
- Backend: [tasks]
- Frontend: [tasks]

## Phase 2: [Integration]
- [tasks]

## Phase 3: [QA & Deploy]
- [tasks]

## Estimated Complexity
- Backend: [Low/Medium/High]
- Frontend: [Low/Medium/High]
- Total: [X agent-tasks]
```
