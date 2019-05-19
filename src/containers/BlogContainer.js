import React, { Component } from 'react';
import BlogItem from './../components/BlogItem';
import Blog from './../components/Blog';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actDeleteBlog } from '../actions';

class BlogContainer extends Component {
  render() {
    var { blog } = this.props;
    return (
      <Blog>
        { this.showBlog(blog) }
      </Blog>
    );
  }

  showBlog(blog) {
    var { onDeleteBlog } = this.props;
    var res = null;
      if(blog.length > 0) {
        res = blog.map((item, index) => {
          return <BlogItem
            key={index}
            blogItem = {item}
            onDeleteBlog = {onDeleteBlog}
          />
        });
      }
    return res;
  }
}

BlogContainer.propTypes = {
  blog: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      branch: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  onDeleteBlog: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    blog: state.blog
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteBlog: (blog) => {
      dispatch(actDeleteBlog(blog));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
