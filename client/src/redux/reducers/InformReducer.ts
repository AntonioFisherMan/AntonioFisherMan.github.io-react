import { profileAPI } from '../../api/profileAPI'
import { appActions } from './AppReducer'
import { messageActions } from './ServerMessageReducer'
const GET_INFORM_OF_USER = 'GET_INFORM_OF_USER'

let initialState = {
    inform: null as object | null,
    isAddInform: false as boolean | false,
    sendHelpMessage: false as boolean | false,
}

type InitialStateType = typeof initialState
let InformReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_INFORM_OF_USER:
            return { ...state, inform: action.inform, isAddInform: action.isAddInform }
        default:
            return state
    }
}

export const informActions = {
    addInform: (inform: object, isAddInform: boolean) => ({ type: 'GET_INFORM_OF_USER', inform, isAddInform } as const),
}

export const getInform = (id: string) => async (dispatch: any) => {
    try {
        let data = await profileAPI.getInform(id)
        dispatch(informActions.addInform(data.inform, data.isAddInform))
    } catch (err) {}
}
export const updateInform = (inform: any) => async (dispatch: any, getState: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let data = await profileAPI.updateInform(getState().auth.user.id, inform)
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_USER_INFORM_CHANGE'))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'USER_INFORM_CHANGE_ERROR'))
    }
}
export const setInform = (inform: any) => async (dispatch: any, getState: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let data = await profileAPI.setInform(getState().auth.user.id, inform)
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_USER_INFORM_SET'))
        dispatch(informActions.addInform(data, true))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'ERROR_USER_INFORM_SET'))
        dispatch(appActions.setLoading(false))
    }
}

export const sendHelpMessage = (helpMessage: any) => async (dispatch: any, getState: any) => {
    try {
        let data = await profileAPI.sendHelpMessage(helpMessage, getState().auth.userId)
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_HELP_MESSAGE'))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'ERROR_HELP_MESSAGE'))
    }
}

export default InformReducer
