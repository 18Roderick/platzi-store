import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  readonly image: string;
}

//Utilizando Partials No permite reutilizar la validacion de createProduct
export class UpdateProductDto extends PartialType(CreateProductDto) {}
