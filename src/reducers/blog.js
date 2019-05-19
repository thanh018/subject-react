import * as Types from './../constants/ActionsType';

var initialState = [
    {
      id: 1,
      name: 'Lorem Ipsum is simply dummy',
      image: './image/123.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys stps',
      branch: 'Technology',
      price: 10
    },
    {
      id: 2,
      name: 'Content here is simply dummy',
      image: './image/456.jpg',
      description: 'Content here, content here, making it look like readable English. Many desktop publishing p',
      branch: 'Biology',
      price: 20
    },
    {
      id: 3,
      name: 'Where can I get some?',
      image: './image/789.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majo Latin words, combined with a handful of ',
      branch: 'Literature',
      price: 30
    },
  ];
  
  const blog = (state = initialState, action) => {
    var { blog } = action;
    switch(action.type) {
      case Types.DELETE_BLOG:
        state.splice(blog, 1);
        localStorage.setItem('blog', JSON.stringify(state));
        return [...state];
      default: return [...state];
    }
  }
  
  export default blog;
  