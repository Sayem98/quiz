import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

function useQuestions(videoId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      //Data base related works.
      const db = getDatabase();
      const quiz_ref = ref(db, "quiz/" + videoId + "/questions");
      const quiz_query = query(quiz_ref, orderByKey());
      try {
        setLoading(true);
        setError(false);

        const snapshot = await get(quiz_query);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    }
    fetchVideos();
  }, [videoId]);

  return {
    error,
    loading,
    questions,
  };
}

export default useQuestions;
