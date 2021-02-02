// import { loadScript } from './utils'
import Debug from 'debug'
import { CdsOptions } from './interfaces/CdsOptions'
const debug = Debug('cds-lib:index')
// const GAMMA_SCRIPT_URL =
//   'https://front-pt.orchextra.io/static/cds/sdkbundle-gamma-2.5.js'
// const PROD_SCRIPT_URL =
//   'https://front-pt.orchextra.io/static/cds/sdkbundle-prod-2.5.1.js'
// const initCds = async (options = {}) => {
//   debug('initCds', options)
//   // const { environment, bundlePath, locale } = options
//   // const scriptUrl = environment === 'oat' ? GAMMA_SCRIPT_URL : PROD_SCRIPT_URL
//   // debug(scriptUrl, bundlePath, locale)
//   // await loadScript(scriptUrl)
//   // debug('scriptUrl loaded', scriptUrl)
// }

export default class Cds {
  initCds(options: CdsOptions): void {
    debug('initCds', options)
  }
}

// export { initCds }
