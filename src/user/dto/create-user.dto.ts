import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Column } from 'typeorm';

@Exclude()
export class CreateUserDto {
  @IsString()
  @Expose()
  readonly username: string;
  @Expose()
  @Column()
  tenantCode: string;
}
