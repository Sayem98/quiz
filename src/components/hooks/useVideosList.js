import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

function useVideosList(page) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [videos, setVodeos] = useState([]);
  const [hasmore, setHasmore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      //Data base related works.
      const db = getDatabase();
      const video_ref = ref(db, "videos");
      const video_query = query(
        video_ref,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setLoading(true);
        setError(false);

        const snapshot = await get(video_query);
        setLoading(false);

        if (snapshot.exists()) {
          setVodeos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasmore(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    }
    fetchVideos();
  }, [page]);

  return {
    error,
    loading,
    videos,
    hasmore,
  };
}

export default useVideosList;
