import { Module } from '@nestjs/common';
import { PostsModule } from '../modules/posts/posts.module';
import { CommentsModule} from '../modules/comments/comments.module';
import { PostsController } from './controllers/posts.controller';
import { CommentsController } from './controllers/comments.controller';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [PostsModule, CommentsModule,ServeStaticModule.forRoot({
    rootPath: join(__dirname, '../..', 'public'),
    }),
    ],
  controllers: [PostsController, CommentsController],
})
export class ApiModule {}
