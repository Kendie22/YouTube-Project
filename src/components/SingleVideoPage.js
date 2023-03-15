import { useState } from "./react";
import { Link, useParams } from "react-router-dom";

export function SingleVideoPage() {
  const [singleVideoPage, setSingleVideoPage] = useState({});
  const [loadingError, setLoadingError] = useState(true);

  const { id } = useParams();

  function handleDelete() {}
  return (
    <section className="singleVideoPage-SingleVideoPage-wrapper">
      <h2>{SingleVideoPage.title}</h2>
      <section className="singleVideoPage-SingleVideoPage">
        {loadingError ? (
          <Error />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span>
                {SingleVideoPage.duration}
              </p>
              <p>
                <span>Listed Categories:</span>
                {SingleVideoPage.listedIn}
              </p>
              <p>
                <span>Country:</span>
                {SingleVideoPage.country}
              </p>
              <p>
                <span>Rating:</span>
                {SingleVideoPage.rating}
              </p>
              <p>
                <span>Date Added:</span>
                {SingleVideoPage.dateAdded}
              </p>
            </aside>
            <article>
              <p>{singleVideoPage.description}</p>
            </article>
            <aside>
              <button
                className="delete"
                onClick={() => handleDelete(singleVideoPage.id)}
              >
                Remove SingleVideoPage
              </button>
              <Link to={`/SingleVideoPage/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}
