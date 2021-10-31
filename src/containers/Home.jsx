import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";

/// Los valores mylist, trends, originals se pasan de forma destructurante
/// Los mismos deben concordar con los nombres de las propiedades del store
/// Asi Redux los entiende como propiedades
const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

Home.propTypes = {
  mylist: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array,
};
export default connect(mapStateToProps, null)(Home);
