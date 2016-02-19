'use strict';

import ReactDOM from 'react-dom'
import React, {PropTypes} from 'react'

import {IntlProvider} from 'react-intl';

import TagList from './taginfo2'
import VisibleLayers from './visibleLayers'
import LayerConfig from './layerConfig'

import { createLayers } from './config/layerlist'


import configureStore from './store/reducers'

import { initLayerVisible } from './store/actions'

let store = configureStore()

let layers = createLayers(store);

let defaultVisibleList = {};
layers.forEach(layer => {
  defaultVisibleList[layer.index] = layer.visibleDefault;
})
store.dispatch(initLayerVisible(defaultVisibleList));

import { Provider } from 'react-redux'

/*
if (window.location.hash !== '') {
  // try to restore center, zoom-level and rotation from the URL
  var hash = window.location.hash.replace('#map=', '');
  var parts = hash.split('/');
  if (parts.length === 3) {
    zoom = parseInt(parts[0], 10);
    lon = parseFloat(parts[1]);
    lat = parseFloat(parts[2]);
  }
}*/


const taglist=[
  {
    key: 'sport',
    value: 'scuba_diving'
  }
]

const tabs = [
  {
    name: 'main',
    tabSymbol: 'menu-hamburger',
    content: <h1>Hello!</h1>
  },
  {
    name: 'settings',
    tabSymbol: 'cog',
    content: <LayerConfig/>
  },
  {
    name: 'details',
    tabSymbol: 'eye-open',
    content: <TagList tags={taglist} />
  }
]

const locale='en';
const messages={
  'test': 'key: {key} / value: {value}',
  'tags': 'Tags',

  'sidebar-main': 'Online map',
  'sidebar-settings': 'Settings',
  'sidebar-details': 'Details',

  'layer-name-seamarks':'OpenSeaMap seamarks',
  'layer-name-depth-geodaten_mv':'Official depth data for Germany/MV',
  'layer-name-int1_base':'INT1 style basemap',
  'layer-name-openstreetmap-base':'OpenStreetMap basemap',
  'layer-name-scuba_diving':'POIs for scuba diving',
  'layer-name-seamarks-debug':'OpenSeaMap seamarks debug information'
}

import {LayerType} from './chartlayer'

class MapLayerProvider extends React.Component{
  getChildContext() {
    return {
      layers: this.props.layers
    }
  }
  render() {
    return this.props.children;
  }
}
MapLayerProvider.childContextTypes = {
  layers: PropTypes.arrayOf(LayerType.isRequired).isRequired
}
MapLayerProvider.propTypes = {
  children: PropTypes.node,
  layers: PropTypes.arrayOf(LayerType.isRequired).isRequired
}

ReactDOM.render(
  (
  <IntlProvider
      locale={locale}
      messages={messages}
  >
    <Provider store={store}>
      <MapLayerProvider layers={layers}>
        <VisibleLayers
            sidebar_tabs={tabs}
        />
      </MapLayerProvider>
    </Provider>
  </IntlProvider>
  ),
  document.getElementById('map')
);
/*
var $ = require('jquery');
var Main = require('main');

$(function() {

  var map = new Main();
  console.log(map);
});*/
