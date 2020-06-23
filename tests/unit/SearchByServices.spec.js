import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchByService from '@/components/Dog_Day_Care/SearchByService.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('SearchByService', () => {
  
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
    const wrapper = shallowMount(SearchByService, { store, localVue })
    expect(wrapper.findComponent({"name": "NotFound"}))
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByService.data).toBe('function')
    const defaultData = SearchByService.data()
    expect(defaultData.currentUser).toStrictEqual({})
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByService.data).toBe('function')
    const defaultData = SearchByService.data()
    expect(defaultData.cadena).toBe("")
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByService.data).toBe('function')
    const defaultData = SearchByService.data()
    expect(defaultData.component).toBe("SearchByService")
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByService.data).toBe('function')
    const defaultData = SearchByService.data()
    expect(defaultData.info).toStrictEqual([])
  })

})