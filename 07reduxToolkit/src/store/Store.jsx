import {configureStore} from "@reduxjs/toolkit"
import Slice from '../features/Slice'

const Store=configureStore({
    reducer:{
        counter: Slice,
    }
});

export default Store;