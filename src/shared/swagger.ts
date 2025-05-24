import type { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function swagger(app: INestApplication) {
	const config = new DocumentBuilder()
		.setTitle('Backend-example')
		.setDescription('Backend-example API')
		.setVersion('0.0.1')
		.build()

	const factory = () => SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('docs', app, factory)
}
