import { IssueBuilder } from "@nkrkn/linear-auto-task";

// add your tasks to this object
const issueBuilder = new IssueBuilder();

// GitHub action reads the output from console.
console.log(issueBuilder.build());
