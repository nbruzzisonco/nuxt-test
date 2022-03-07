import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Counter from '~/store/counter'

let counter: Counter

function initialiseStores(store: Store<any>): void {
  counter = getModule(Counter, store)
}

export { initialiseStores, counter }