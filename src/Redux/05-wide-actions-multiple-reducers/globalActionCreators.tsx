import { ResetAction } from "./globalActions";


export const reset: () => ResetAction = () => ({type: 'RESET'})