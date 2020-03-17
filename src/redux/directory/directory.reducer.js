const initialState = {
  sections: [
    {
      title: 'laptops',
      imageUrl: 'https://i.ytimg.com/vi/U-9tUEOFKNU/maxresdefault.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'monitors',
      imageUrl:
        'https://tehnot.com/wp-content/uploads/2019/06/Apple_Mac-Pro-Display-Pro_Display-Pro-Workflow_060319.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'keyboards',
      imageUrl:
        'https://cnet1.cbsistatic.com/img/iAwrNF7QZUDGAVS9xD1YAnNnEOo=/1200x675/2019/08/20/db2c8f57-f31e-4995-99e3-50f2c7ce49e3/gaming-keyboards-200-01.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'mouses',
      imageUrl: 'https://i.gyazo.com/431cb6bfa69ea344426dbbfeee1a31a6.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'headphones',
      imageUrl:
        'https://manofmany.com/wp-content/uploads/2019/09/sennheiser-momentum-wireless-headphones-2.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
