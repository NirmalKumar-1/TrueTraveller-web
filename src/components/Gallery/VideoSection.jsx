import React from "react";
import VideoAndReelsBox from "./VideoAndReelsBox";
import videos from "./videos";

function VideoSection() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h3 className="fw-bold text-center mb-5">Travel Videos & Reels</h3>

        <div className="row g-4">
          {/* Video 1 */}
          <VideoAndReelsBox image={videos[0]} />
          {/* Video 2 */}
          <VideoAndReelsBox image={videos[1]} />
          {/* Video 3 */}
          <VideoAndReelsBox image={videos[2]} />
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
