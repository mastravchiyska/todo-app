export interface Task {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    title: string;
    description?: string;
    completed?: boolean;
    priority?: number;
    project?: object;
}