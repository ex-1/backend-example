import { NestFactory } from '@nestjs/core'

import { AppModule } from './core/app.module'
import { createDocs } from './core/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	createDocs(app)

	await app.listen(8000)
}

bootstrap()
