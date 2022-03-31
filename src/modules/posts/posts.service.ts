import { Injectable } from '@nestjs/common';
import { Posts } from '../../api/dto/post.dto';
import * as fs from 'fs';
import { Response } from 'express';

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
        avatar:"9116ebb5010486a8de7cfbe5e41b666ec.png"
      },
      {
        id: 2,
        text: 'second comment',
        createdAt: new Date(Date.now()),
        avatar:"e79c9571b9d40610b3efe22677729f6c.png"
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
    if (data) {
      data.id = posts.length + 1;
      data.createdAt = new Date(Date.now());
      if (data.comments) {
        data.comments.forEach((item) => {
          item.createdAt = new Date(Date.now());
        });
      }
    }
    if (!data.comments) data.comments = [];
    if (!data.author) data.author = 'Anonim';
    posts.push(data);
    return data;
  }

  async updatePost(data: Posts): Promise<Posts> {
    let existingPost = posts[data.id];
    existingPost = {
      ...existingPost,
      ...data,
    };
    existingPost['id'] = data.id + 1;
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
  async saveFile(path: string, data: Buffer) {
    fs.writeFile(path, data, (error) => {
      if (error) throw new Error(error.message);
    });
  }

  async getFile(response: Response) {
    const buffer = fs.createReadStream('D:/user/blog/text.txt');
    buffer.pipe(response).on('close', () => {
      buffer.destroy();
    });
  }
}
