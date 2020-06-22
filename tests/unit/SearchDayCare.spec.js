import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchDayCare from '@/components/Dog_Day_Care/SearchDayCare.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('SearchDayCare', () => {
  
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
  

  it('has a SearchByScore component', () => {
    const wrapper = shallowMount(SearchDayCare, { store, localVue })
     expect(wrapper.findComponent({"name": "SearchByScore"}))
  })

  it('has a SearchByName component', () => {
    const wrapper = shallowMount(SearchDayCare, { store, localVue })
    expect(wrapper.findComponent({"name": "SearchByName"}))
  })

  it('has a SearchByService component', () => {
    const wrapper = shallowMount(SearchDayCare, { store, localVue })
    expect(wrapper.findComponent({"name": "SearchByService"}))
  })

  it('has a SearchGeneral component', () => {
    const wrapper = shallowMount(SearchDayCare, { store, localVue })
    expect(wrapper.findComponent({"name": "SearchGeneral"}))
  })

  it('sets the correct default data', () => {
    expect(typeof SearchDayCare.data).toBe('function')
    const defaultData = SearchDayCare.data()
    expect(defaultData.component).toBe("SearchGeneral")
    })

})