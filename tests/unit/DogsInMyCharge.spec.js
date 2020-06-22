import { shallowMount, createLocalVue } from '@vue/test-utils'
import DogsInMyCharge from '@/components/Dog_Day_Care/DogsInMyCharge.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('DogsInMyCharge', () => {
  
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
    expect(typeof DogsInMyCharge.data).toBe('function')
    const defaultData = DogsInMyCharge.data()
    expect(defaultData.currentUser).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof DogsInMyCharge.data).toBe('function')
    const defaultData = DogsInMyCharge.data()
    expect(defaultData.notification_description).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof DogsInMyCharge.data).toBe('function')
    const defaultData = DogsInMyCharge.data()
    expect(defaultData.nameState).toStrictEqual(null)
  })

  it('sets the correct default data', () => {
    expect(typeof DogsInMyCharge.data).toBe('function')
    const defaultData = DogsInMyCharge.data()
    expect(defaultData.selectedUser).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof DogsInMyCharge.data).toBe('function')
    const defaultData = DogsInMyCharge.data()
    expect(defaultData.petsActive).toStrictEqual([])
  })

})