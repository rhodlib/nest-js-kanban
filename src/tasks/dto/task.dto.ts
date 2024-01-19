import { TaskStatus } from "../task.entity";
import { IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string;
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    @MinLength(5)
    title?: string;

    @IsString()
    @IsOptional()
    @MinLength(5)
    description?: string;

    @IsString()
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;
}