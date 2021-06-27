import {combineReducers} from 'redux'

import {users} from './user'
import {blogs} from './blog'

export const reducers=combineReducers({users,blogs})