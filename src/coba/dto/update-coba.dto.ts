import { PartialType } from '@nestjs/mapped-types';
import { CreateCobaDto } from './create-coba.dto';

export class UpdateCobaDto extends PartialType(CreateCobaDto) {}
