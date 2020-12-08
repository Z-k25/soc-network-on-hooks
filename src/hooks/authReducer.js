export const success = (response) => ({ type: 'success', response })
export const failure = () => ({ type: 'failure' })
export const clear = () => ({ type: 'clear' })

export const initialState = {
    id: null,
    login: null,
    email: null,
    isLogedOn: null,
    isLoading: true
}

export const authDataReducer = (state, action) => {
    switch (action.type) {
        case 'success': {
            return {
                ...state,
                ...action.response,
                isLogedOn: true,
                isLoading: false
            }
        }
        case 'failure': {
            return {
                ...state,
                isLogedOn: false,
                isLoading: false
            }
        }
        case 'clear': {
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isLogedOn: false,
                isLoading: false
            }
        }
        default: {
            return state
        }
    }
}

