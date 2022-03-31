import { Posts } from '../api/dto/post.dto';
import { Comment } from '../api/dto/comment.dto';

export const templateComments = (comments: Comment[]) => {
  if (comments?.length === 0) {
    return  '<div class="card-comments">Комментарии</div>';
  }

  let html = '<div class="card-comments">Комментарии';
  for (const commentItem of comments) {
    html += `
    <div class="comment-item">
    <div class="card-img">
    <img src="http://localhost:3000/uploads/${commentItem?.avatar}">
    </div>
    <p class="card-text">${commentItem.text}</p>
    <h6 class="card-subtitle mb-2 text-muted"> Дата создания: ${commentItem.createdAt}</h6>
    </div>
    `;
  }
   html += '</div>';
  return html;
};

