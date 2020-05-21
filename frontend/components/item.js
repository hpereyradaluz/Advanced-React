import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        <Title>
          <Link>
            <a>{item.title}</a>
          </Link>
        </Title>
      </ItemStyles>
    );
  }
}

Item.propTypes = {};

export default Item;
