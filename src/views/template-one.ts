import { Posts } from '../api/dto/post.dto';
import { templateComments } from './template-comments';

export const newsTemplateOne = (post: Posts) => {
  if (!post) {
    return emptyNews();
  }

  let html = `
    <div class="card">
    <div class="card-content">
    <h5 class="card-title">${post.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Автор: ${post.author}
    </h6>
    <h6 class="card-subtitle mb-2 text-muted"> Дата создания: ${post.createdAt}
    </h6>
    <p class="card-text">${post.description}</p>
    </div>
    ${templateComments(post.comments)}</div>
    `;

  return html;
};
const emptyNews = () => {
  return `<h1>Запрашиваемый пост отсутствует!</h1>`;
};
