import React, { Component } from 'react';

import MenuItem from '../menu-item/MenuItem';

import './directory.scss';

export default class Directory extends Component {
  state = {
    section: [
      {
        title: 'laptops',
        imageUrl: 'https://i.ytimg.com/vi/U-9tUEOFKNU/maxresdefault.jpg',
        id: 1,
        linkUrl: 'shop/laptops'
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

  render() {
    return (
      <div className='directory-menu'>
        {this.state.section.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}
