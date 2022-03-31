import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Render,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from '../../modules/posts/posts.service';
import { Posts } from '../dto/post.dto';
import { htmlTemplate } from '../../templates/template';
import { newsTemplate } from '../../templates/template-post';
import { DecrementQueryId } from '../../utils/decrement-query-id.decorator';
import { DecrementBodyId } from '../../utils/decrement-body-id.decorator';
import { newsTemplateOne } from '../../templates/template-one';
import { DecrementParamId } from '../../utils/decrement-param-id.decorator';
import { ParamIdDto } from '../dto/param-id.dto';
import { isInt16Array } from 'util/types';
import { IsInt, IsNumberString } from 'class-validator';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname, join } from 'path';
import { Response, Express } from 'express';
import { createReadStream } from 'fs';
import { diskStorage, Multer } from 'multer';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostsService) {}

  @Get('get-all')
  async getPosts(): Promise<Posts[]> {
    return this.appService.getPosts();
  }
  @Get('say-hello')
  @Render('index')
  sayHello(): { message: string } {
    return { message: 'Привет!!!' };
  }

  @Get('get-one')
  async getPost(
    @Query() @DecrementQueryId(['id']) query: ParamIdDto,
  ): Promise<Posts> {
    return this.appService.getPost(query.id);
  }

  @Post('create')
  async createPost(@Body() data: Posts): Promise<Posts> {
    return this.appService.createPost(data);
  }

  @Delete('delete')
  async deletePost(
    @Body() @DecrementBodyId(['id']) body: ParamIdDto,
  ): Promise<Posts[]> {
    return this.appService.deletePost(body.id);
  }

  @Put('update')
  async updatePost(
    @Body() @DecrementBodyId(['id']) data: Posts,
  ): Promise<Posts> {
    return this.appService.updatePost(data);
  }

  @Get()
  async getViewAll(): Promise<string> {
    const posts = await this.appService.getPosts();
    return htmlTemplate(newsTemplate(posts));
  }

  @Get('/:id/detail')
  async getPostDetails(
    @Param() @DecrementParamId(['id']) params: ParamIdDto,
  ): Promise<String> {
    const post = await this.appService.getPost(params.id);
    return htmlTemplate(newsTemplateOne(post));
  }


  @Get('file')
  getFile(@Res() res: Response) {
    const file = createReadStream(join(process.cwd(), '/media/pexels.jpg'));
    file.pipe(res);
  }

}
