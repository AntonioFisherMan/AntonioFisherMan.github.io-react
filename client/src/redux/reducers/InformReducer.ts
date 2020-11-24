import { profileAPI } from '../../api/profileAPI'
import { appActions } from './AppReducer'
import { messageActions } from './ServerMessageReducer'
const GET_INFORM_OF_USER = 'GET_INFORM_OF_USER'
const CLEAR_INFORM_OF_USER = 'CLEAR_INFORM_OF_USER'
const CHANGE_INFORM_LAYOUT = 'CHANGE_INFORM_LAYOUT'

let initialState = {
    inform: null as object | null,
    isAddInform: false as boolean | false,
    isGetInform: false as boolean | false,
    sendHelpMessage: false as boolean | false,
}

type InitialStateType = typeof initialState
let InformReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_INFORM_OF_USER:
            return { ...state, inform: action.inform, isAddInform: action.isAddInform, isGetInform: true }
        case CHANGE_INFORM_LAYOUT:
            return { ...state, isAddInform: action.isCard }
        case CLEAR_INFORM_OF_USER:
            return { ...state, inform: null, isAddInform: false }
        default:
            return state
    }
}

export const informActions = {
    addInform: (inform: object, isAddInform: boolean) => ({ type: 'GET_INFORM_OF_USER', inform, isAddInform } as const),
    changeInformLayout: (isCard: boolean) => ({ type: 'CHANGE_INFORM_LAYOUT', isCard } as const),
    clearInform: () => ({ type: 'CLEAR_INFORM_OF_USER' } as const),
}

export const getInform = (id: string) => async (dispatch: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let data = await profileAPI.getInform(id)
        dispatch(informActions.addInform(data.inform, data.isAddInform))
        dispatch(appActions.setLoading(false))
    } catch (err) {}
}
export const updateInform = (inform: any) => async (dispatch: any, getState: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let data = await profileAPI.updateInform(getState().auth.user.id, inform)
        dispatch(informActions.addInform(data.inform, data.isAddInform))
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_USER_INFORM_CHANGE'))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'USER_INFORM_CHANGE_ERROR'))
        dispatch(appActions.setLoading(false))
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
export const uploadUserImage = (files: any) => async (dispatch: any, getState: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let data = await profileAPI.uploadUserImage(getState().auth.user.id, files)
        dispatch(informActions.addInform(data.inform, true))
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_UPLOAD_USER_IMAGE'))
        dispatch(appActions.setLoading(false))
    } catch (error) {}
}
export const sendHelpMessage = (helpMessage: string) => async (dispatch: any, getState: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let data = await profileAPI.sendHelpMessage(helpMessage, getState().auth.userId)
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_HELP_MESSAGE'))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'ERROR_HELP_MESSAGE'))
        dispatch(appActions.setLoading(false))
    }
}

export default InformReducer
