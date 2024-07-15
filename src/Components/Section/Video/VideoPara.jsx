import React from "react";
import ReactPlayer from "react-player";
const VideoPara = () => {
  return (
    <div>
      <div className="resource-news">
        <section className="resources_news blogbox animation-element capability bounce-up in-view">
          <div className="pageContainer container">
            <h3 className="heading32 pb-3">Latest Video of Our Event :</h3>
            <div className="row pt-4 news-row">
              <div className="col-lg-4 col-md-6 col-xl-4 col-sm-6 all digital tab_content flex-container">
                <div className="card card-custom bg-white border-white">
                  <div className="player-wrapper">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=DTvypRzWL2M"
                      width="100%"
                      height="100%"
                      controls={true}
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoPara;
