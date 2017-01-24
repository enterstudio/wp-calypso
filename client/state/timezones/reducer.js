/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import { createReducer } from 'state/utils';
import { TIMEZONES_RECEIVE } from 'state/action-types';

import {
	rawOffsetsSchema,
	labelsSchema,
	continentsSchema
} from './schema';

export const rawOffsetReducer = createReducer( {}, {
	[ TIMEZONES_RECEIVE ]: ( state, { rawOffsets = [] } ) => rawOffsets
}, rawOffsetsSchema );

export const labelsReducer = createReducer( {}, {
	[ TIMEZONES_RECEIVE ]: ( state, { labels = {} } ) => labels
}, labelsSchema );

export const byContinentsReducer = createReducer( [], {
	[ TIMEZONES_RECEIVE ]: ( state, { byContinents } ) => ( byContinents )
}, continentsSchema );

export default combineReducers( {
	rawOffsets: rawOffsetReducer,
	labels: labelsReducer,
	byContinents: byContinentsReducer,
} );
