import React from "react";
import "./styles.css";
import Container from "@material-ui/core/Container";

// COMPONENTS
import SectionName from '../SectionName/sectionName'
import Ad from "../ads/ads";
import LinkStepper from "../LinkStepper/linksStepper";
import ProductSpecifications from "./productSpecifications/productSpecifications";
import SortBy from "./SortBy/sortBy.js";
import Products from "../Products/products";

const mainContent = () => {
  return (
    <>
      <Container>
        <Ad />
        <LinkStepper />
      </Container>
      <SectionName  title={"Телевизоры"}/>
      <Container>
        <div className="main__content">
          {/* className="product__specifications"> */}
          <ProductSpecifications />

          <div className="products__section">
            <SortBy />

            <Products />
          </div>
        </div>
      </Container>
    </>
  );
};

export default mainContent;
