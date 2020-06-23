import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchGeneral from '@/components/Dog_Day_Care/SearchGeneral.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('SearchGeneral', () => {
  
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
  
  it('has a NotFound component', () => {
    const wrapper = shallowMount(SearchGeneral, { store, localVue })
    expect(wrapper.findComponent({"name": "NotFound"}))
  })

  it('sets the correct default data', () => {
    expect(typeof SearchGeneral.data).toBe('function')
    const defaultData = SearchGeneral.data()
    expect(defaultData.currentUser).toStrictEqual({})
  })

  it('sets the correct default data', () => {
    expect(typeof SearchGeneral.data).toBe('function')
    const defaultData = SearchGeneral.data()
    expect(defaultData.cadena).toBe("")
  })

  it('sets the correct default data', () => {
    expect(typeof SearchGeneral.data).toBe('function')
    const defaultData = SearchGeneral.data()
    expect(defaultData.component).toBe("SearchGeneral")
  })

  it('sets the correct default data', () => {
    expect(typeof SearchGeneral.data).toBe('function')
    const defaultData = SearchGeneral.data()
    expect(defaultData.info).toStrictEqual([])
  })

})