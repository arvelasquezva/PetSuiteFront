import { shallowMount, createLocalVue } from '@vue/test-utils'
import Profile from '@/views/Profile.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('Profile', () => {
  
let store

  beforeEach(() => {})

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
    expect(typeof Profile.data).toBe('function')
    const defaultData = Profile.data()
    expect(defaultData.currentUser).toBe("")
  })

  it('has a UpdateClient component', () => {
    const wrapper = shallowMount(Profile, { store, localVue })
     expect(wrapper.findComponent({"name": "UpdateClient"}))
  })

  it('has a UpdateDogwalker component', () => {
    const wrapper = shallowMount(Profile, { store, localVue })
    expect(wrapper.findComponent({"name": "UpdateDogwalker"}))
  })

  it('has a UpdateDaycare component', () => {
    const wrapper = shallowMount(Profile, { store, localVue })
    expect(wrapper.findComponent({"name": "UpdateDaycare"}))
  })

})