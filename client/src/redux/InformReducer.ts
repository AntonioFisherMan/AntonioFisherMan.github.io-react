import { testAPI } from '../api/api'
import { returnErrors, returnSuccess } from './SuccessErrorReducer'
const GET_INFORM_OF_USER = 'GET_INFORM_OF_USER'

let initialState = {
    inform: null as Object | null,
    isAddInform: false as Boolean | false,
    sendHelpMessage: false as Boolean | false,
}

type InitialStateType = typeof initialState
let InformReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_INFORM_OF_USER:
            return {
                ...state,
                inform: action.inform,
                isAddInform: action.isAddInform,
            }
        default:
            return state
    }
}

type AddInformType = { type: typeof GET_INFORM_OF_USER; inform: Object; isAddInform: Boolean }
const addInform = (inform: Object, isAddInform: Boolean): AddInformType => ({ type: GET_INFORM_OF_USER, inform, isAddInform })

export const getInform = (id: any) => (dispatch: any) => {
    testAPI.getInform(id).then((response: any) => {
        dispatch(addInform(response.data.inform, response.data.isAddInform))
    })
}
export const updateInform = (inform: any) => (dispatch: any, getState: any) => {
    testAPI
        .updateInform(getState().auth.user.id, inform)
        .then((response: any) => {
            dispatch(returnSuccess(response.data.message, response.status, 'SUCCESS_USER_INFORM_CHANGE'))
        })
        .catch((err: any) => {
            dispatch(returnErrors(err.response.data.message, err.response.status, 'USER_INFORM_CHANGE_ERROR'))
        })
}
export const setInform = (inform: any) => (dispatch: any, getState: any) => {
    testAPI
        .setInform(getState().auth.user.id, inform)
        .then((response: any) => {
            dispatch(returnSuccess(response.data.message, response.status, 'SUCCESS_USER_INFORM_SET'))
            dispatch(addInform(response.data, true))
        })
        .catch((err: any) => {
            dispatch(returnErrors(err.response.data.message, err.response.status, 'ERROR_USER_INFORM_SET'))
        })
}

export const sendHelpMessage = (helpMessage: any) => (dispatch: any, getState: any) => {
    testAPI
        .sendHelpMessage(helpMessage, getState().auth.userId)
        .then((response: any) => {
            dispatch(returnSuccess(response.data.message, response.status, 'SUCCESS_HELP_MESSAGE'))
        })
        .catch((err: any) => {
            dispatch(returnErrors(err.response.data.message, err.response.status, 'ERROR_HELP_MESSAGE'))
        })
}

export default InformReducer
