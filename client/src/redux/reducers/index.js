import {combineReducers} from 'redux'

import {users} from './user'
import {blogs} from './blog'
import {teams} from './teams'
import {involved} from './involved'
import {projects} from './project'

export const reducers=combineReducers({users,blogs,teams,involved,projects})