export default ({ app, route }) => {
        
        const url = route.fullPath;

        app.store.dispatch('setLanguageFromURL', { url });
        
      };
      