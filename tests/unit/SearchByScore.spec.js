import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchByScore from '@/components/Dog_Day_Care/SearchByScore.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('SearchByScore', () => {
  
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
    const wrapper = shallowMount(SearchByScore, { store, localVue })
    expect(wrapper.findComponent({"name": "NotFound"}))
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByScore.data).toBe('function')
    const defaultData = SearchByScore.data()
    expect(defaultData.currentUser).toStrictEqual({})
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByScore.data).toBe('function')
    const defaultData = SearchByScore.data()
    expect(defaultData.cadena).toBe("")
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByScore.data).toBe('function')
    const defaultData = SearchByScore.data()
    expect(defaultData.component).toBe("SearchByScore")
  })

  it('sets the correct default data', () => {
    expect(typeof SearchByScore.data).toBe('function')
    const defaultData = SearchByScore.data()
    expect(defaultData.info).toStrictEqual([])
  })

})