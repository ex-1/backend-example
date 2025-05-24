import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'

import {
	CreateTodoUseCase,
	DeleteTodoUseCase,
	GetTodoUseCase,
	GetTodosUseCase,
	UpdateTodoUseCase
} from '@/app/todo/usecases'

import { CreateTodoDto, UpdateTodoDto } from './dto'

@Controller('todos')
export class TodoController {
	constructor(
		private readonly getTodosUseCase: GetTodosUseCase,
		private readonly getTodoUseCase: GetTodoUseCase,
		private readonly createTodoUseCase: CreateTodoUseCase,
		private readonly updateTodoUseCase: UpdateTodoUseCase,
		private readonly deleteTodoUseCase: DeleteTodoUseCase
	) {}

	@Get()
	async getAll() {
		return this.getTodosUseCase.execute()
	}

	@Get('/:id')
	async getById(@Param('id') id: string) {
		return this.getTodoUseCase.execute(id)
	}

	@Post('/create')
	async create(@Body() body: CreateTodoDto) {
		return this.createTodoUseCase.execute(body.title)
	}

	@Put('/update')
	async update(@Body() body: UpdateTodoDto) {
		return this.updateTodoUseCase.execute(body)
	}

	@Delete('/delete')
	async delete(@Query('id') id: string) {
		return this.deleteTodoUseCase.execute(id)
	}
}
