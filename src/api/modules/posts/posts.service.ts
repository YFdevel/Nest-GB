import { Injectable } from '@nestjs/common';
import { Posts } from '../../dto/post.dto';

const posts: Posts[] = [
  {
    id: 1,
    title: 'firstText',
    author: 'firstName',
    description: 'firstDesc',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    comments: [
      {
        id: 1,
        text: 'comment',
        createdAt: new Date(Date.now()),
      },
      {
        id: 2,
        text: 'second comment',
        createdAt: new Date(Date.now()),
      },
    ],
  },
];

@Injectable()
export class PostsService {
  async getPosts(): Promise<Posts[]> {
    return posts;
  }

  async getPost(id: number): Promise<Posts> {
    return posts[id];
  }

  async createPost(data: Posts): Promise<Posts> {
     if(!data.comments)
     data.comments=[];
    posts.push(data);
    return data;
  }

  async updatePost(data: Posts): Promise<Posts> {
    let existingPost = posts[data.id];
    existingPost = {
      ...existingPost,
      ...data,
    };
    existingPost['id']=data.id+1;
    posts[data.id] = existingPost;
    return posts[data.id];
  }

  async deletePost(id: number): Promise<Posts[]> {
    const post = posts[id];
    if (post) {
      posts.splice(id, 1);
      return posts;
    } else throw new Error('Post not found');
  }
}
