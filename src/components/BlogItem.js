import React, { Component } from 'react';

class BlogItem extends Component {
  render() {
    var {blogItem} = this.props;
    return (
        <li className="Blog-item">
          <span onClick = { () => this.btnDeleteBlog(blogItem) }>XXXX</span>
          <h3>{blogItem.branch}</h3>
          <p>{blogItem.description}</p>
          <p>--------------</p>
        </li>
    );
  }
  btnDeleteBlog = (blogItem) => {
    this.props.onDeleteBlog(blogItem);
  }
}

export default BlogItem;
