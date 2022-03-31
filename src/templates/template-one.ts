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
    ${templateComments(post.comments)}
    <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
    <form class="upload-form" method="post" enctype="multipart/form-data" target="dummyframe"
    action="http://127.0.0.1:3000/comments/upload?id=${post.id}">
    <p>Создайте комментарий</p>
    <textarea name="text" class="textarea"></textarea>
    <label for="file" class="label">Загрузить аватарку</label>
    <input type="file" id ="file" name="file"/><br>
    <button type="submit">Создать</button>
    </form>
    </div>
  
    `;

  return html;
};
const emptyNews = () => {
  return `<h1>Запрашиваемый пост отсутствует!</h1>`;
};
