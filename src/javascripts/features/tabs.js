/**
* @license AGPL-3.0
* @author mojoaxel (https://github.com/mojoaxel)
*/
'use strict'
import React from 'react'

import LayerConfig from './layerConfig/featureLayerConfig'
import MdLayers from 'react-icons/lib/md/layers'

import FeatureDevelopment from './development/featureDevelopment'
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaTags from 'react-icons/lib/fa/tags'

import { defineMessages } from 'react-intl'

import FeatureDetails from 'features/details/featureDetails'

export const messages = defineMessages({
  sidebarSettings: {
    id: 'sidebar-settings',
    defaultMessage: 'Settings'
  },
  sidebarDevelopment: {
    id: 'sidebar-development',
    defaultMessage: 'About'
  },
  sidebarDetails: {
    id: 'sidebar-details',
    defaultMessage: 'Details'
  }
})

export const Tabs = [{
  name: 'sidebar-settings',
  align: 'top',
  icon: <MdLayers />,
  content: <LayerConfig />
}, {
  name: 'sidebar-development',
  align: 'bottom',
  icon: <FaInfoCircle />,
  content: <FeatureDevelopment />
}]

export const TabSidebarDetails = {
  name: 'sidebar-details',
  align: 'top',
  icon: <FaTags />,
  content: <FeatureDetails />
}

export const TabType = React.PropTypes.shape({
  align: React.PropTypes.string.isRequired,
  content: React.PropTypes.node.isRequired,
  icon: React.PropTypes.node.isRequired,
  name: React.PropTypes.string.isRequired
})
