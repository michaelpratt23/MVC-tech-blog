document.querySelectorAll(".comment-form").forEach((form) =>
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const comment_text = e.target.querySelector("textarea").value.trim();
    const post_id = e.target.dataset.postId;

    if (comment_text) {
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment_text, post_id }),
        headers: { "Content-Type": "application/json" },
      });

      document.location.reload();
    }
  })
);
