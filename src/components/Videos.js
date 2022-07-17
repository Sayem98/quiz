import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import classes from "../styles/Videos.module.css";
import useVideosList from "./hooks/useVideosList";
import Video from "./Video";
function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasmore } = useVideosList(page);

  return (
    <div className={classes.videos}>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasmore}
          loader='Waiting...'
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 1 ? (
              <Link to="/quiz" key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found !</div>}
      {error && <div>There was an error !</div>}
      {loading && <div>Loading</div>}
    </div>
  );
}

export default Videos;
