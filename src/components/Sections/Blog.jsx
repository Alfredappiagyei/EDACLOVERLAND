import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
// import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Industry Expertise</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Energy and Utilities"
                text="Eda Clovaland offers innovative solutions in the energy and utilities sector, providing comprehensive services in design, development, and maintenance of energy systems. Our expertise spans renewable energy, power generation, and distribution, ensuring efficient and sustainable energy solutions. We are dedicated to delivering high-quality, reliable services that meet the evolving needs of our clients and contribute to a greener future."
                
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Transportation and Infrastructure"
                text="We provide top-notch engineering solutions for transportation and infrastructure projects. Our services encompass the design, construction, and maintenance of roads, bridges, and public transit systems. With a focus on innovation, safety, and sustainability, we deliver infrastructure projects that enhance connectivity and support economic growth. Our team of experts ensures that each project meets the highest standards of quality and efficiency."
                
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Manufacturing and Construction"
                text="Eda Clovaland offers comprehensive services in manufacturing and construction, delivering high-quality solutions tailored to meet client needs. Our expertise includes the design, fabrication, and assembly of mechanical and electrical systems, as well as civil engineering projects. We are committed to innovation, safety, and sustainability, ensuring that every project is executed to the highest standards of excellence and efficiency."
                // tag="company"
                // author="Luke Skywalker, 2 days ago"
                // action={() => alert("clicked")}
              />
            </div>
          </div>
        
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;