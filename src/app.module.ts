import { Module } from '@nestjs/common'

import { TodoModule } from './app/todo/controllers'

@Module({ imports: [TodoModule], controllers: [], providers: [] })
export class AppModule {}
