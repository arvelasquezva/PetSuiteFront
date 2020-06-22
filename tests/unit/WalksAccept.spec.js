import { shallowMount, createLocalVue } from '@vue/test-utils'
import WalksAccept from '@/components/Walker/WalksAccept.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('WalksAccept', () => {
  
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
    expect(typeof WalksAccept.data).toBe('function')
    const defaultData = WalksAccept.data()
    expect(defaultData.currentUser).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof WalksAccept.data).toBe('function')
    const defaultData = WalksAccept.data()
    expect(defaultData.show).toBe(false)
  })

  it('sets the correct default data', () => {
    expect(typeof WalksAccept.data).toBe('function')
    const defaultData = WalksAccept.data()
    expect(defaultData.name).toBe("")
  })

  it('sets the correct default data', () => {
    expect(typeof WalksAccept.data).toBe('function')
    const defaultData = WalksAccept.data()
    expect(defaultData.nameState).toStrictEqual(null)
  })

  it('sets the correct default data', () => {
    expect(typeof WalksAccept.data).toBe('function')
    const defaultData = WalksAccept.data()
    expect(defaultData.selectedUser).toStrictEqual("")
  })

})