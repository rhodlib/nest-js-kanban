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

    getTaskById(id: string){
        return this.tasks.find(t => t.id === id);
    }

    getAllTasks(){
        return this.tasks;
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

    updateTask(id: string, updatedFields: any){
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updatedFields)
        this.tasks = this.tasks.map(t => t.id === id ? newTask : t)
        return newTask;
    }

    deleteTask(id: string){
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}
