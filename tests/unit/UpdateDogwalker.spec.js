import { shallowMount, createLocalVue } from '@vue/test-utils'
import UpdateDogwalker from '@/components/Update/UpdateDogwalker.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('UpdateDogwalker', () => {
  
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
    expect(typeof UpdateDogwalker.data).toBe('function')
    const defaultData = UpdateDogwalker.data()
    expect(defaultData.currentUser).toStrictEqual({})
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDogwalker.data).toBe('function')
    const defaultData = UpdateDogwalker.data()
    expect(defaultData.proposeddog_walkerUser).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDogwalker.data).toBe('function')
    const defaultData = UpdateDogwalker.data()
    expect(defaultData.proposeddog_walkerPassword).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDogwalker.data).toBe('function')
    const defaultData = UpdateDogwalker.data()
    expect(defaultData.proposeddog_walkerName).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDogwalker.data).toBe('function')
    const defaultData = UpdateDogwalker.data()
    expect(defaultData.proposeddog_walkerPhone).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDogwalker.data).toBe('function')
    const defaultData = UpdateDogwalker.data()
    expect(defaultData.proposeddog_walkerEmail).toStrictEqual("")
  })

})