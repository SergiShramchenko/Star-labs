import React, { Component } from 'react';

import CATEGORY_DATA from './category-data';

import PreviewCollection from '../../components/preview-collection/CollectionPreview';

export default class CategoryPage extends Component {
  state = {
    collections: CATEGORY_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className='category-page'>
        {collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}
