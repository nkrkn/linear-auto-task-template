# linear-auto-task-template

Create a repository using this template to create repeating issues in [Linear](https://linear.app/homepage)! Issues in Linear cannot be created repeatedly on a schedule, which is why I created this solution.

## How it works

After creating a repository from this template, you can define issues to create and how often to create them in TypeScript. TypeScript allows you to use autocompletion and documentation from Linear's SDK for a better issue authroing experience.

The `@nkrkn/linear-auto-task` package contains an `IssueBuilder` class where you can define and configure issues you want the `@nkrkn/linear-auto-task-action` to create when the workflow runs.

The workflow is defined in `.github/workflows/auto-task.yml`, and it runs on every push to `main` and on a set schedule defined by the user.

## Usage

1. Clone this template to your own repository.

2. Install dependencies

```bash
pnpm i
```

3. Add issues to the `IssueBuilder` class in the `tasks/index.ts` file.

```typescript
import { IssueBuilder } from "@nkrkn/linear-auto-task";

// add your tasks to this object
const issueBuilder = new IssueBuilder({
  autoTaskName: "My-Task",
  teamId: "get_this_id_from_linear",
  repeatOptions: {
    type: "daily",
  },
  {
    autoTaskName: "My-Second-Task",
    teamId: "get_this_id_from_linear",
    repeatOptions: {
        type: "weekly",
        day: "Sunday"
    },
  }
});

// GitHub action reads the output from console.
console.log(issueBuilder.build());
```

4. Set cron schedule in `.github/workflows/auto-task.yml`. This should be daily.

```yml
on:
  push:
    branches:
      - main
  schedule:
    # This is UTC, offset the hours argument to match your timzone if needed.
    - cron: "0 0 * * *"
```

5. Add your Linear Personal API Key to your repository's GitHub Action secrets under `LINEAR_PERSONAL_API_KEY`

6. Commit and push your changes to start a new workflow run!
