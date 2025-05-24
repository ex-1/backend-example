import { Injectable } from '@nestjs/common'
import { Todo as PrismaTodo } from 'orm'

import { Todo } from '@/domain/todo/entities'
import { TodoRepo } from '@/domain/todo/repository'

import { PrismaService } from '@/shared/prisma.service'

@Injectable()
export class PrismaTodoRepo implements TodoRepo {
	constructor(private readonly prisma: PrismaService) {}

	private toDomain(data: PrismaTodo) {
		return new Todo(data.id, data.title, data.completed, data.createdAt, data.updatedAt)
	}

	async findById(id: string): Promise<Todo | null> {
		const record = await this.prisma.todo.findUnique({ where: { id } })
		return record ? this.toDomain(record) : null
	}

	async findAll(): Promise<Todo[]> {
		const records = await this.prisma.todo.findMany()
		return records.length > 0 ? records.map(this.toDomain) : []
	}

	async create(data: Todo): Promise<Todo> {
		const record = await this.prisma.todo.create({ data })
		return this.toDomain(record)
	}

	async update(todo: Partial<Todo>): Promise<Todo> {
		const { id, createdAt, ...data } = todo
		void createdAt

		const record = await this.prisma.todo.update({ data, where: { id } })
		return this.toDomain(record)
	}

	async delete(id: string): Promise<void> {
		await this.prisma.todo.delete({ where: { id } })
	}
}
