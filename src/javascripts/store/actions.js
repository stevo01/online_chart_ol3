/**
* @license AGPL-3.0
* @author aAXEe (https://github.com/aAXEe)
*/
'use strict'

export const SET_LOCALE = 'SET_LOCALE'
export function setLocale (locale) {
  return {
    type: SET_LOCALE,
    locale: locale
  }
}

export const SET_LAYER_VISIBLE = 'SET_LAYER_VISIBLE'

export const INIT_LAYER_VISIBLE = 'INIT_LAYER_VISIBLE'
export function setLayerVisible (id, visible) {
  return {
    type: SET_LAYER_VISIBLE,
    id: id,
    visible: visible
  }
}
export function initLayerVisible (visibleList) {
  return {
    type: INIT_LAYER_VISIBLE,
    list: visibleList
  }
}

export const SET_VIEW_POSITION = 'SET_VIEW_POSITION'
export function setViewPosition (position, extent) {
  return {
    type: SET_VIEW_POSITION,
    position: position,
    extent: extent
  }
}

export const FEATURE_CLICKED = 'FEATURE_CLICKED'
export function featureClicked (feature) {
  return {
    type: FEATURE_CLICKED,
    feature: feature
  }
}

export const LAYER_TILE_LOAD_CHANGE = 'LAYER_TILE_LOAD_CHANGE'
// loadEvent is of type ol.source.ImageEvent or ol.source.TileEvent
export function layerTileLoadStateChange (id, loadEvent) {
  return {
    type: LAYER_TILE_LOAD_CHANGE,
    id: id,
    changeType: loadEvent.type
  }
}

export const SEARCH_START = 'SEARCH_START'
export function searchStart (queryString) {
  return {
    type: SEARCH_START,
    query: queryString
  }
}
export const SEARCH_CLEAR = 'SEARCH_CLEAR'
export function searchClear () {
  return {
    type: SEARCH_CLEAR
  }
}
export const SEARCH_END = 'SEARCH_END'
export function searchEnd (success, response) {
  return {
    type: SEARCH_END,
    success: success,
    response: response
  }
}
export const SEARCH_RESULT_HOVERED = 'SEARCH_RESULT_HOVERED'
export function searchResultHovered (featureId) {
  return {
    type: SEARCH_RESULT_HOVERED,
    featureId: featureId
  }
}
// to remove the hover from any feature
export function searchResultUnhover () {
  return {
    type: SEARCH_RESULT_HOVERED,
    featureId: null
  }
}

export const SEARCH_RESULT_CLICKED = 'SEARCH_RESULT_CLICKED'
export function searchResultClicked (featureId) {
  return {
    type: SEARCH_RESULT_CLICKED,
    featureId: featureId
  }
}
// clear the last clicked element
export function searchResultUnclick () {
  return {
    type: SEARCH_RESULT_CLICKED,
    featureId: null
  }
}

export const DOWNLOAD_SET_FEATURES = 'DOWNLOAD_SET_FEATURES'
export function downloadSetFeatures (features) {
  return {
    type: DOWNLOAD_SET_FEATURES,
    features: features
  }
}
export const DOWNLOAD_SET_FILTER = 'DOWNLOAD_SET_FILTER'
export function downloadSetFilter (filter) {
  return {
    type: DOWNLOAD_SET_FILTER,
    filter: filter
  }
}
export const DOWNLOAD_HOVERED = 'DOWNLOAD_HOVERED'
export function downloadHovered (featureId) {
  return {
    type: DOWNLOAD_HOVERED,
    featureId: featureId
  }
}
// to remove the hover from any feature
export function downloadUnhover () {
  return {
    type: DOWNLOAD_HOVERED,
    featureId: null
  }
}

export const DOWNLOAD_CLICKED = 'DOWNLOAD_CLICKED'
export function downloadClicked (featureId) {
  return {
    type: DOWNLOAD_CLICKED,
    featureId: featureId
  }
}
// clear the last clicked element
export function downloadUnclick () {
  return {
    type: DOWNLOAD_CLICKED,
    featureId: null
  }
}

export const downloadFeatureMatchesFilter = (feature, filter) => {
  for (const key in filter) {
    if (!new RegExp(filter[key]).test(feature[key])) return false
  }
  return true
}
