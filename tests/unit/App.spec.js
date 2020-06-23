import { shallowMount, createLocalVue} from '@vue/test-utils'
import App from '@/App.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('App',() => {
  
    let store

  beforeEach(() => {})

  store = new Vuex.Store({
    modules: {
        auth: {
        state: {},
            getters: {
                loggedIn: jest.fn(),
                valuePets: jest.fn(),
                valueServices: jest.fn(),
                rolIn: jest.fn(),
            }
        }   
    }
  })
  
  it('has a Notifications component', () => {
    const wrapper = shallowMount(App, { store, localVue })
        expect(wrapper.findComponent({"name": "Notifications"}))
     })
    
     it('has a NavbarComponente component', () => {
        const wrapper = shallowMount(App, { store, localVue })
        expect(wrapper.findComponent({"name": "NavbarComponente"}))
      })
})
