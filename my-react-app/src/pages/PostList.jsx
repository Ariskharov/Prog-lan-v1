import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./PostList.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setIsLoading(false));
  }, []);

  const curatedPosts = useMemo(() => posts.slice(0, 12), [posts]);

  return (
    <div className="post-list-page">
      <section className="hero-section text-center text-white py-5 mb-4">
        <div className="container">
          <p className="badge text-bg-success px-3 py-2 mb-3 text-uppercase small fw-semibold">
            Minecraft Stories
          </p>
          <h1 className="display-5 fw-bold mb-3">
            Собери свою легенду в кубическом мире
          </h1>
          <p className="lead text-white-50 mx-auto hero-subtitle">
            Мы собрали лучшие заметки и дневники игроков, которые пережили рейды,
            приручили аксолотлей и построили города на облаках.
          </p>
          <div className="d-flex gap-3 justify-content-center mt-4 flex-wrap">
            <a
              className="btn btn-success btn-lg px-4"
              href="https://www.minecraft.net/ru-ru/article"
              target="_blank"
              rel="noreferrer"
            >
              Лента Mojang
            </a>
            <a
              className="btn btn-outline-light btn-lg px-4"
              href="https://minecraft.fandom.com/ru/wiki/Minecraft_Wiki"
              target="_blank"
              rel="noreferrer"
            >
              Вики по блокам
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
          <div>
            <h2 className="h3 text-success fw-bold mb-1">Пост-лист сообщества</h2>
            <p className="text-white-50 mb-0">
              {isLoading ? "Загружаем свежие истории..." : `Найдено ${curatedPosts.length} вдохновляющих заметок.`}
            </p>
          </div>
          <div className="d-flex gap-2">
            <span className="badge rounded-pill text-bg-dark border border-success-subtle">
              🌱 Креатив
            </span>
            <span className="badge rounded-pill text-bg-dark border border-success-subtle">
              ⚔️ Выживание
            </span>
            <span className="badge rounded-pill text-bg-dark border border-success-subtle">
              🧪 Редстоун
            </span>
          </div>
        </div>

        {isLoading && (
          <div className="text-center text-white-50 py-5">
            <div className="spinner-border text-success mb-3" role="status" />
            <p className="mb-0">Растущие бамбуковые сервера... Подождите чуть-чуть.</p>
          </div>
        )}

        {!isLoading && (
          <div className="row g-4">
            {curatedPosts.map((post) => (
              <div className="col-sm-6 col-lg-4" key={post.id}>
                <article className="card h-100 minecraft-card border-0 shadow">
                  <div className="card-body d-flex flex-column">
                    <span className="text-uppercase text-success small fw-semibold mb-2">
                      #{post.id.toString().padStart(3, "0")}
                    </span>
                    <h3 className="card-title h5 text-white">{post.title}</h3>
                    <p className="card-text text-white-50 flex-grow-1">
                      {post.body.slice(0, 120)}...
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <span className="badge text-bg-success-subtle text-success fw-semibold">
                        Survival
                      </span>
                      <Link className="btn btn-success btn-sm" to={`/post/${post.id}`}>
                        Читать подробнее
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}