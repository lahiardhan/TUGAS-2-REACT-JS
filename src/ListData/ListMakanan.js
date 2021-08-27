import React, { Component } from "react";

class ListMenuMakanan extends Component {
   constructor(props) {
      super(props);
      this.state = {
         datalist : this.props.link_img
      };
   }
   render() {
      return(
         <div>
            <img src={this.state.datalist} alt="Product Makanan" width="150"/>
         </div>
      );
   }
}

export default ListMenuMakanan;