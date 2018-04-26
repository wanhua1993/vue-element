const types = {
    // 这里是定义组件的方法 名
    MENU_EXTENSION: 'MENU_EXTENSION', //添加菜单
}


const state = {
    // 这里是组件的状态
    is_menu_extension: false,
    sidebar: {
        opened: true,
        width_0: {
            "width": '15%'
        },
        width_1: {
            "width": '85%'
        }
    },
}

const getters = {
    // 这里一般写一些过滤 state 的方法
    menuitems: state => state.is_menu_extension,
    sidebar: state => state.sidebar
}

const mutations = {
    // 这里写改变组件状态的方法 这里的方法一般是用commit 的方法来提交调用的
    [types.MENU_EXTENSION](state, menu) {
        if (state.sidebar.opened) {
            state.sidebar.width_0 = {
                "width": '0'
            };
            state.sidebar.width_1 = {
                "width": '100%'
            };
        } else {
            state.sidebar.width_0 = {
                "width": '15%'
            };
            state.sidebar.width_1 = {
                "width": '85%'
            };
        }
        state.sidebar.opened = !state.sidebar.opened;
    },
}

const actions = {
    // 这里一般是定义 异步 改变组件的方法 一般是用dispatch 的方法来提交调用的 (可以是ajax请求数据)
    addMenu: ({ commit }, menuItems) => {
        if (menuItems.length > 0) {
            commit(types.ADD_MENU, menuItems)
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}