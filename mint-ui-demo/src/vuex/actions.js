/**
 * Created by shaoyongkai on 2017/8/28.
 */
import { ADD_ITEM } from './mutation-type.js'
export const addItem = ({dispatch, store}, item) => {
  dispatch(ADD_ITEM, item);
}
