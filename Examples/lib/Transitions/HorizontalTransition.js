import React from 'react';
import { Dimensions, Animated } from 'react-native';

import BaseAppearTransition from './BaseAppearTransition';

class HorizontalTransition extends BaseAppearTransition {
	getTransitionStyle() {
		if(!this.state.transitionConfiguration)
			return {};
        
        const { x, width } = this.state.transitionConfiguration.metrics;
        const distanceValue = this.state.transitionConfiguration.direction === 1 ? 
            -(width + x + 25) : Dimensions.get('window').width - (x - 25);

		const progress = this.state.transitionConfiguration.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [distanceValue, 0]
		});

		return {
			transform: [{
				translateX: progress
			}]
		};
	}
}

export default HorizontalTransition;