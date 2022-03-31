import { Posts } from '../api/dto/post.dto';
import { templateComments } from './template-comments';

export const newsTemplate = (posts: Posts[]) => {
  if (posts?.length === 0) {
    return emptyNews();
  }

  let html = '';
  for (const postItem of posts) {
    html += `
    <div class="card">
    <div class="card-content">
    <h5 class="card-title">${postItem.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Автор: ${postItem.author}
    </h6>
    <h6 class="card-subtitle mb-2 text-muted"> Дата создания: ${postItem.createdAt}
    </h6>
    <p class="card-text">${postItem.description}</p>
    </div>
    ${templateComments(postItem.comments)}</div>
    `;
  }


  return html;
};
const emptyNews = () => {
  return `<h1>Список постов пуст!</h1>`;
};
