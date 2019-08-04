import React, { FunctionComponent } from "react";

import { Task } from "../models/task";
import { TaskListItem } from "./TaskListItem";

interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const TaskList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
  <>
    <div>
      <h3>Tasks</h3>
      {tasks.length == 0 ? "-" : null}
      <ul>
        {tasks.map((task, _i) => (
          <TaskListItem key={_i} task={task} onDelete={onDelete} />
        ))}
      </ul>
    </div>
    <style jsx>{`
      div {
        min-width: 12em;
      }
    `}</style>
  </>
);
