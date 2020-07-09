import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null
})

export const StartupTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  rehydrated: false
})

export const startup = state => {
  // moment.updateLocale('en', {
  //     relativeTime : {
  //         // future: "in %s",
  //         //past:   "%s ago",
  //         s:  "Today",
  //         m:  "Today",
  //         mm: "Today",
  //         h:  "Today",
  //         hh: "Today",
  //         d:  "Yesterday",
  //         dd: "%d days ago",
  //         M:  "a month ago",
  //         MM: "%d months ago",
  //         y:  "a year ago",
  //         yy: ">1 year ago"
  //     }
  // });

  return state.merge({ rehydrated: true })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: startup
})
