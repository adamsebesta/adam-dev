import vue from "vue";

export const state = () => ({
  scrolledAbout: false,
});

export const getters = {
  unreadNotifs: (state) => {
    if (state.data.notifications) {
      return state.data.notifications.filter((n) => !n.read).length;
    }
  },
};

export const actions = {};

export const mutations = {
  setScrolledAbout(state, s) {
    state.scrolledAbout = s;
  },
};
