import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const numericId = Number(id);
  const [postEntry, setPostEntry] = useState(null);
  const [errorEntry, setErrorEntry] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Не смогли добыть хронику.");
        }
        return res.json();
      })
      .then((data) => setPostEntry({ id: numericId, data }))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setErrorEntry({ id: numericId, message: err.message });
        }
      });

    return () => controller.abort();
  }, [id, numericId]);

  if (errorEntry?.id === numericId) {
    return (
      <div className="container text-center py-5 text-danger fw-semibold">
        {errorEntry.message}
      </div>
    );
  }

  if (!postEntry || postEntry.id !== numericId) {
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
                История #{postEntry.data.id}
              </p>
              <h1 className="detail-title">{postEntry.data.title}</h1>
              <p className="detail-text">{postEntry.data.body}</p>
              <div className="detail-badges mt-4">
                <span className="badge text-bg-success me-2">⛏️ Adventures</span>
                <span className="badge text-bg-dark border border-success-subtle">
                  🧭 Coordinates 0 / 64 / 0
                </span>
              </div>
            </div>
          </article>
          <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
            <Link className="btn btn-outline-light" to="/">
              ← Вернуться к пост-листу
            </Link>
            <a
              className="btn btn-success"
              href="https://www.chunkbase.com/"
              target="_blank"
              rel="noreferrer"
            >
              Открыть карту мира
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}