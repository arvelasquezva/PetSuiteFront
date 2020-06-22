import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchByName from '@/components/Dog_Day_Care/SearchByName.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('SearchByName', () => {
  
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
    const wrapper = shallowMount(SearchByName, { store, localVue })
    expect(wrapper.findComponent({"name": "NotFound"}))
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByName.data).toBe('function')
    const defaultData = SearchByName.data()
    expect(defaultData.currentUser).toStrictEqual({})
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByName.data).toBe('function')
    const defaultData = SearchByName.data()
    expect(defaultData.cadena).toBe("")
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByName.data).toBe('function')
    const defaultData = SearchByName.data()
    expect(defaultData.component).toBe("SearchByName")
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByName.data).toBe('function')
    const defaultData = SearchByName.data()
    expect(defaultData.info).toStrictEqual([])
  })

})