'use strict'
import { Message } from 'element-ui';
export default {
    state: {

    },
    mutations: {
        open1(state, { msg }) {
            Message({
                showClose: true,
                message: msg
            });
        },
        success(state, { msg }) {
            Message({
                showClose: true,
                message: msg,
                type: 'success'
            });
        },

        warning(state, { msg }) {
            this.$message({
                showClose: true,
                message: msg,
                type: 'warning'
            });
        },

        error(state, { msg }) {
            this.$message({
                showClose: true,
                message: msg,
                type: 'error'
            });
        }
    }
}