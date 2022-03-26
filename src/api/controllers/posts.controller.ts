import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { PostsService } from '../modules/posts/posts.service';
import { Posts } from '../dto/post.dto';
import { htmlTemplate } from '../../views/template';
import { newsTemplate } from '../../views/template-post';
import { DecrementQueryId } from '../../utils/decrement-query-id.decorator';
import { DecrementBodyId } from '../../utils/decrement-body-id.decorator';
import { newsTemplateOne } from '../../views/template-one';
import { DecrementParamId } from '../../utils/decrement-param-id.decorator';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostsService) {}

  @Get('get-all')
  async getPosts(): Promise<Posts[]> {
    return this.appService.getPosts();
  }

  @Get('get-one')
  async getPost(@Query() @DecrementQueryId(['id']) query: { id: number }): Promise<Posts> {
   return this.appService.getPost(query.id);
   
  }

  @Post('create')
  async createPost(@Body() data: Posts): Promise<Posts> {
    return this.appService.createPost(data);
  }

  @Delete('delete')
  async deletePost(@Body() @DecrementBodyId(['id']) body: { id: number }): Promise<Posts[]> {
    return this.appService.deletePost(body.id);
  }

  @Put('update')
  async updatePost(@Body() @DecrementBodyId(['id']) data: Posts): Promise<Posts> {
    return this.appService.updatePost(data);
  }

  @Get()
  async getViewAll(): Promise<string> {
    const posts = await this.appService.getPosts();
    return htmlTemplate(newsTemplate(posts));
  }

  @Get('/:id/detail')
  async getPostDetails(@Param('id') @DecrementParamId(['id']) id: number ): Promise<String> {
    const post=await this.appService.getPost(id);
    return htmlTemplate(newsTemplateOne(post));
  }
}
