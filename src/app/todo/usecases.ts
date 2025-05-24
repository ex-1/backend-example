import { Inject } from '@nestjs/common'
import { randomUUID } from 'crypto'

import { Todo } from '@/domain/todo/entities'

import { PrismaTodoRepo } from '@/infra/todo/persistence'

export class GetTodosUseCase {
	constructor(
		@Inject('TodoRepo')
		private readonly todoRepo: PrismaTodoRepo
	) {}

	async execute() {
		return await this.todoRepo.findAll()
	}
}

export class GetTodoUseCase {
	constructor(
		@Inject('TodoRepo')
		private readonly todoRepo: PrismaTodoRepo
	) {}

	async execute(id: string) {
		return await this.todoRepo.findById(id)
	}
}

export class CreateTodoUseCase {
	constructor(
		@Inject('TodoRepo')
		private readonly todoRepo: PrismaTodoRepo
	) {}

	async execute(title: string) {
		const todo = new Todo(randomUUID(), title, false)
		return await this.todoRepo.create(todo)
	}
}

export class UpdateTodoUseCase {
	constructor(
		@Inject('TodoRepo')
		private readonly todoRepo: PrismaTodoRepo
	) {}

	async execute(data: Partial<Todo>) {
		return await this.todoRepo.update(data)
	}
}

export class DeleteTodoUseCase {
	constructor(
		@Inject('TodoRepo')
		private readonly todoRepo: PrismaTodoRepo
	) {}

	async execute(id: string) {
		return await this.todoRepo.delete(id)
	}
}
