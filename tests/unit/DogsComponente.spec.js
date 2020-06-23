import { shallowMount, createLocalVue } from '@vue/test-utils'
import DogsComponente from '@/components/User/DogsComponente.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('DogsComponente', () => {
  
let store

  beforeEach(() => {

     

  })

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

  it('sets the correct default data', () => {
    expect(typeof DogsComponente.data).toBe('function')
    const defaultData = DogsComponente.data()
    expect(defaultData.currentUser).toStrictEqual({})
  })

  it('has a UpdatePets component', () => {
    const wrapper = shallowMount(DogsComponente, { store, localVue })
    expect(wrapper.findComponent({"name": "UpdatePets"}))
  })

})