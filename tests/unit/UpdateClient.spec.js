import { shallowMount, createLocalVue } from '@vue/test-utils'
import UpdateClient from '@/components/Update/UpdateClient.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('UpdateClient', () => {
  
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
    expect(typeof UpdateClient.data).toBe('function')
    const defaultData = UpdateClient.data()
    expect(defaultData.show).toStrictEqual(false)
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateClient.data).toBe('function')
    const defaultData = UpdateClient.data()
    expect(defaultData.currentUser).toStrictEqual({})
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateClient.data).toBe('function')
    const defaultData = UpdateClient.data()
    expect(defaultData.proposedClientUser).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateClient.data).toBe('function')
    const defaultData = UpdateClient.data()
    expect(defaultData.proposedClientPassword).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateClient.data).toBe('function')
    const defaultData = UpdateClient.data()
    expect(defaultData.proposedClientName).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateClient.data).toBe('function')
    const defaultData = UpdateClient.data()
    expect(defaultData.proposedClientPhone).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateClient.data).toBe('function')
    const defaultData = UpdateClient.data()
    expect(defaultData.proposedClientEmail).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof UpdateClient.data).toBe('function')
    const defaultData = UpdateClient.data()
    expect(defaultData.proposedClientAddress).toStrictEqual("")
  })


})