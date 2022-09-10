import {combineReducers} from 'redux'
import welcome_msg from './welcome_msg'
import custom_theme_name from './custom_theme_name'

export default combineReducers({
    sample_val: (state=0,action) => {
        return state
    },
    welcome_msg: welcome_msg,
    custom_theme_name: custom_theme_name
})
