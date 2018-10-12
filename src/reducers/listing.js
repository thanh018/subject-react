var initialState = [
  {
    id: 1,
    name: 'Lorem Ipsum is simply dummy',
    image: './image/4.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys stps',
    branch: 'Technology',
    price: 10
  },
  {
    id: 2,
    name: 'Content here is simply dummy',
    image: './image/5.jpg',
    description: 'Content here, content here, making it look like readable English. Many desktop publishing p',
    branch: 'Biology',
    price: 20
  },
  {
    id: 3,
    name: 'Where can I get some?',
    image: './image/6.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majo Latin words, combined with a handful of ',
    branch: 'Literature',
    price: 30
  },

];

const listing = (state = initialState, action) => {
  switch(action.type) {
    default: return [...state];
  }
}

export default listing;
