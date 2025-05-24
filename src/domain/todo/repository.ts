import { Todo } from './entities'

export interface TodoRepo {
	findById(id: string): Promise<Todo | null>
	findAll(): Promise<Todo[]>

	create(todo: Todo): Promise<Todo>
	delete(id: string): Promise<void>
	update(todo: Partial<Todo>): Promise<Todo>
}
