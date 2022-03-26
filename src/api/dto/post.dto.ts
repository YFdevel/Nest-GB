import { Comment } from "./comment.dto";


export class Posts {
  id!: number;

  title!: string;
  
  author!: string;

  description!: string;

  createdAt!: Date;

  updatedAt!: Date;

  comments!: Comment[];

}
