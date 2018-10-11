var initialState = [
  {
    id: 1,
    name: 'Title 1',
    branch: 'Branch 1',
    reservation: 50
  },
  {
    id: 2,
    name: 'Title 2',
    branch: 'Branch 2',
    reservation: 60
  },
  {
    id: 3,
    name: 'Title 3',
    branch: 'Branch 3',
    reservation: 70
  }
];

const listing = (state = initialState, action) => {
  switch(action.type) {
    default: return [...state];
  }
}

export default listing;
