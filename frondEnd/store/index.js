import { URL } from 'url';
export const state = () => ({
        language: 'VN',
        
})

export const getters = {
        language(state) {
                return state.language;
        },
       


}
export const mutations = {
        setLanguage(state, lang) {
                state.language = lang;
        },       

}

export const actions = {
        setLanguageFromURL({ commit }, { url }) {
          const language = url.startsWith('/en/') ? 'EN' : 'VN';
          commit('setLanguage', language);
        }
      };


