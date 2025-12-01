import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PostDetail.css";
import minecraftPosts from "./minecraftPosts.json";

export default function PostDetail() {
  const { id } = useParams();
  const numericId = Number(id);
  const [postEntry, setPostEntry] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = minecraftPosts.find((p) => p.id === numericId) || null;
      setPostEntry(found);
    }, 300);

    return () => clearTimeout(timer);
  }, [numericId]);

  if (!postEntry) {
    return (
      <div className="container text-center py-5 text-white-50">
        <div className="spinner-grow text-success mb-3" role="status" />
        <p className="mb-0">Загружаем хронику экспедиции...</p>
      </div>
    );
  }

  return (
    <section className="post-detail container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <article className="card detail-card border-0 glass-panel">
            <div className="card-body p-md-5">
              <p className="text-uppercase text-success small fw-semibold mb-2">
                История #{postEntry.id}
              </p>
              <h1 className="detail-title">{postEntry.title}</h1>
              <p className="detail-text">{postEntry.body}</p>
              <div className="detail-badges mt-4">
                <span className="badge text-bg-success me-2">⛏️ Adventures</span>
              </div>
            </div>
          </article>
          <div className="d-flex justify-content-start align-items-center mt-4 flex-wrap gap-3">
            <Link className="btn btn-outline-light" to="/">
              ← Вернуться к пост-листу
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}