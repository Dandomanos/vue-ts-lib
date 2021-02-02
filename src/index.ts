import BlueButton from './components/BlueButton.vue'
import RedButton from './components/RedButton.vue'
import Toolbar from './components/Toolbar.vue'
import Cds from './lib/index'

// Exportación de los componentes individualmente
export { BlueButton, RedButton, Toolbar, Cds }

// Instalación de la librería como un plugin
// eslint-disable-next-line
export function install(Vue: any) {
  Vue.component('BlueButton', BlueButton)
  Vue.component('RedButton', RedButton)
  Vue.component('Toolbar', Toolbar)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install })
}

const cdsLib = {
  '@gigigo/cds-lib': { install: install }
}

// Exportación de la librería como plugin
export default cdsLib['@gigigo/cds-lib']
