import React from "react";
import "./Carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      active: this.props.active,
    };
    this.rightClick = this.moveRight.bind(this);
    this.cliclInterval = 0; 
    this.startInterval = 0;
  }


  generateItems() {
    const items = [];
    let level;

    for (let i = this.state.active - 3; i < this.state.active + 4; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item key={index} id={this.state.items[index].image} level={level} />
      );
    }
    return items;
  }


  moveRight() {
    const newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
    });
  }


  componentDidMount() {
  //  this.startInterval = setTimeout(this.rightClick, 0)
  // this.cliclInterval = setInterval(this.rightClick, 2000);
   
 
  }

  componentWillUnmount() {
   // clearInterval(this.cliclInterval); 
   // clearTimeout(this.startInterval);
  }


  render() {
    return (
      <div className="carousel">
       {this.generateItems()}
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  render() {
    const className = "item level" + this.props.level;
    return (
      <div className={className}>
        <img className="item__image" src={this.props.id} alt="bitrix" />
      </div>
    );
  }
}

export default Carousel;
