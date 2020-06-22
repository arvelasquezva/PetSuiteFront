import { shallowMount, createLocalVue } from '@vue/test-utils'
import RegisterWalkPetition from '@/components/User/RegisterWalkPetition.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)


describe('RegisterWalkPetition', () => {
  
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
    expect(typeof RegisterWalkPetition.data).toBe('function')
    const defaultData = RegisterWalkPetition.data()
    expect(defaultData.currentUser).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterWalkPetition.data).toBe('function')
    const defaultData = RegisterWalkPetition.data()
    expect(defaultData.show).toBe(false)
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterWalkPetition.data).toBe('function')
    const defaultData = RegisterWalkPetition.data()
    expect(defaultData.dog_selected).toBe("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterWalkPetition.data).toBe('function')
    const defaultData = RegisterWalkPetition.data()
    expect(defaultData.pickup_date).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterWalkPetition.data).toBe('function')
    const defaultData = RegisterWalkPetition.data()
    expect(defaultData.pickup_time).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterWalkPetition.data).toBe('function')
    const defaultData = RegisterWalkPetition.data()
    expect(defaultData.notes).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterWalkPetition.data).toBe('function')
    const defaultData = RegisterWalkPetition.data()
    expect(defaultData.walk_petition_duration).toStrictEqual("")
  })

})