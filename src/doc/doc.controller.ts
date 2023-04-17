import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DocService } from './doc.service';
import { docDto } from './dtos/doc.dto';

@ApiTags('博客文档')
@Controller('docs')
export class DocController {
  constructor(private readonly docService: DocService) {}

  @ApiOperation({
    summary: '测试博客文档接口',
    description: '测试博客文档接口，一个简单的get接口',
  })
  @Get()
  async getDocs(@Body() docDto): Promise<docDto> {
    const res = await this.docService.getDocs();
    return res;
  }

  @ApiOperation({
    summary: '获取所有的博客文档',
    description: '传入title(试验性),获取所有的博客文档列表',
  })
  @Post('/allDocs')
  getAllDocs(): string {
    return this.docService.getAllDocs();
  }
}
