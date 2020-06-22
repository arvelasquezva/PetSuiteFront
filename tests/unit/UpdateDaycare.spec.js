import { shallowMount, createLocalVue } from '@vue/test-utils'
import UpdateDaycare from '@/components/Update/UpdateDaycare.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('UpdateDaycare', () => {
  
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
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.currentUser).toStrictEqual({})
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.proposeddog_daycareUser).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.proposeddog_daycarePassword).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.proposeddog_daycareName).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.proposeddog_daycarePhone).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.proposeddog_daycareEmail).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.proposeddog_daycareAddress).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.proposeddog_daycarePriceBase).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateDaycare.data).toBe('function')
    const defaultData = UpdateDaycare.data()
    expect(defaultData.proposeddog_daycareTax).toStrictEqual("")
  })


})