const custom_theme_name = (state = 'light', action) => {

    switch (action.type) {
        case 'SET_CHANGE_THEME_NAME':
            return action.payload.theme
        default:
            return state
    }

}

export default custom_theme_name
