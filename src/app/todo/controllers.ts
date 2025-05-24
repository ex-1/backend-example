import { Module } from '@nestjs/common'

import { TodoController } from '@/infra/todo/controller'
import { PrismaTodoRepo } from '@/infra/todo/persistence'

import { PrismaService } from '@/shared/prisma.service'

import {
	CreateTodoUseCase,
	DeleteTodoUseCase,
	GetTodoUseCase,
	GetTodosUseCase,
	UpdateTodoUseCase
} from './usecases'

@Module({
	imports: [],
	controllers: [TodoController],
	providers: [
		PrismaService,
		GetTodosUseCase,
		GetTodoUseCase,
		CreateTodoUseCase,
		UpdateTodoUseCase,
		DeleteTodoUseCase,
		{ provide: 'TodoRepo', useClass: PrismaTodoRepo }
	]
})
export class TodoModule {}
