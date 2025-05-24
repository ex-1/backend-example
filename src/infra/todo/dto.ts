import { ApiProperty } from '@nestjs/swagger'
import {
	IsBoolean,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsUUID,
	MaxLength
} from 'class-validator'

export class CreateTodoDto {
	@ApiProperty()
	@IsString()
	@MaxLength(250)
	@IsNotEmpty()
	title: string
}

export class UpdateTodoDto {
	@ApiProperty()
	@IsUUID()
	id: string

	@ApiProperty({ required: false })
	@IsOptional()
	@IsString()
	@MaxLength(250)
	@IsNotEmpty()
	title: string

	@ApiProperty({ required: false })
	@IsOptional()
	@IsBoolean()
	completed: boolean
}
