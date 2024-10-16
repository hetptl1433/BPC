import React, { useEffect, useState } from "react";
import { NewsData as fetchNewsData } from "../../../Functions/News";

const NewsPara = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const data = await fetchNewsData();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    getNewsData();
  }, []);

  return (
    <div>
      <section className="para_section">
        <div className="container">
          {newsData.length > 0 ? (
            newsData.map((news, index) => (
              <div key={index}>
                <div className="page_top_text animation-element slide-left in-view container">
                  <div className="container">
                    <h2 className="pb-3 heading32">{news.Title}</h2>
                    <div
                      className="mb-4 heading16 ty"
                      style={{ textAlign: "justify" }}
                      dangerouslySetInnerHTML={{ __html: news.Desc }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPara;
