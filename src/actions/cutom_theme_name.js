const setChangeThemeName = theme => ({
    type: 'SET_CHANGE_THEME_NAME',
    payload: {
        theme
    }
})

export const setThemeName = (theme) => ((dispatch) => {
    dispatch(setChangeThemeName(theme))
})
