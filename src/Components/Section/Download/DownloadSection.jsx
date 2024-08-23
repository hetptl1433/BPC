import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { DownloadData } from "../../../Functions/Download";

const DownloadSection = () => {
  const [downloadData, setDownloadData] = useState([]); // Initialize with an empty array


        useEffect(() => {
          const loadData = () => {
            DownloadData().then((data) => {
              setDownloadData(data);
              console.log(data.data);
            });
          };
          loadData();
        }, []);

  return (
    <section className="bod_section mb-5">
      <Container className="pageContainer animation-element slide-left in-view">
        <Breadcrumb>
          <Breadcrumb.Item href="index.html">Home</Breadcrumb.Item>
          <Breadcrumb.Item active aria-current="page">
            <a href="#">Downloads</a>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="bod_top_text">
          <h2 className="heading32 pb-3 lh-1">Download Category</h2>

          {downloadData.length > 0 ? (
            downloadData.map((download) => (
              <Row className="bodbox" key={download._id}>
                <Col lg={4} md={4} className="inner_bodybox">
                  <h1 className="heading18">BPC India</h1>
                  <h2 className="heading16">
                    {download.Title} <p> </p>
                    <a
                      className="btnservice"
                      href={`${process.env.REACT_APP_API_URL_BPC}/${download.DownloadFile}`}
                    >
                      Download
                    </a>
                  </h2>
                </Col>
              </Row>
            ))
          ) : (
            <p>No downloads available at the moment.</p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default DownloadSection;
