import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from "./task.entity"
import { v4 } from "uuid";

@Injectable()
export class TasksService {
    tasks: Task[] = [{
        id: "1",
        title: "First Task",
        description: "This is a description",
        status: TaskStatus.DONE
    }]

    getAllTasks(){
        return this.tasks
    }

    createTask(title: string, description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task)
        return task;
    }
    updateTask(){}
    deleteTask(){}
}
