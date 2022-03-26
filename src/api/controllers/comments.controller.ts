import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
import { DecrementBodyId } from '../../utils/decrement-body-id.decorator';
import { DecrementQueryId } from '../../utils/decrement-query-id.decorator';
import { Comment } from '../dto/comment.dto';
  import { Posts } from '../dto/post.dto';
import { CommentsService } from '../modules/comments/comments.service';
  
  @Controller('comments')
  export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}
  
    @Get('/')
    async getComments(@Query() @DecrementQueryId(['id']) query: { id: number }): Promise<Comment[]> {
      return await this.commentsService.getComments(query.id);
    }
  
    @Get('/get-one')
    async getComment(@Query() @DecrementQueryId(['postId', 'commentId']) query: { postId: number, commentId: number }): Promise<Comment | null> {
      return this.commentsService.getComment(query.postId, query.commentId);
    }
  
    @Post('create')
    async createComment(@Query() @DecrementQueryId(['id']) query: { id: number }, @Body() data: Comment): Promise<Comment> {
      return this.commentsService.createComment(query.id, data);
    }
  
    @Delete('delete')
    async deleteComment(@Body() @DecrementBodyId(['postId', 'commentId'])body: { postId: number, commentId: number }): Promise<Posts[]> {
      return this.commentsService.deleteComment(body.postId, body.commentId);
    }

    @Put('update')
    async updateComment(@Query() @DecrementQueryId(['postId', 'commentId'])query: { postId: number, commentId: number }, @Body() data: Comment): Promise<Comment> {
      return this.commentsService.updateComment(query.postId, query.commentId,data);
    }
  
  }
  