import { IsString } from 'class-validator';

export class CreateTenantDto {
  @IsString()
  readonly tenantName: string;
}
