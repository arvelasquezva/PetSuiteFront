import { shallowMount, createLocalVue } from '@vue/test-utils'
import CaresInProgess from '@/components/Dog_Day_Care/CaresInProgess.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('CaresInProgess', () => {
  
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
    expect(typeof CaresInProgess.data).toBe('function')
    const defaultData = CaresInProgess.data()
    expect(defaultData.show).toStrictEqual(false)
  })

  it('sets the correct default data', () => {
    expect(typeof CaresInProgess.data).toBe('function')
    const defaultData = CaresInProgess.data()
    expect(defaultData.currentUser).toStrictEqual("")
  })


})