import zLoading from './src/Main';

/* istanbul ignore next */
zLoading.install = function(Vue) {
  Vue.component(zLoading.name, zLoading);
};

export default zLoading;