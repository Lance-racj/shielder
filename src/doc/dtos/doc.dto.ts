import { ApiProperty } from '@nestjs/swagger';

export class docDto {
  @ApiProperty({
    example: '测试获取'
  })
  title: string
}