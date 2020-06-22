import { shallowMount, createLocalVue } from '@vue/test-utils'
import ServicesComponente from '@/components/Dog_Day_Care/ServicesComponente.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('ServicesComponente', () => {
  
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
    expect(typeof ServicesComponente.data).toBe('function')
    const defaultData = ServicesComponente.data()
    expect(defaultData.currentUser).toStrictEqual("")
  })

})