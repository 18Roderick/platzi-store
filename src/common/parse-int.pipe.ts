import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (isNaN(value)) {
      throw new BadRequestException(`${value} No es Un Numero`);
    }

    return parseInt(value, 10);
  }
}
