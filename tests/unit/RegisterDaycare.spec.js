import { shallowMount, createLocalVue } from '@vue/test-utils'
import RegisterDaycare from '@/components/User/RegisterDaycare.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const minDate = new Date(today);
const maxDate = new Date(today);
maxDate.setMonth(maxDate.getMonth() + 2);

localVue.use(Vuex)


describe('RegisterDaycare', () => {
  
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
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.currentUser).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.show).toBe(false)
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.showPrice).toBe(false)
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.dog_daycare_invoice_price).toStrictEqual(0)
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.invoice).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.selected).toStrictEqual([])
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.dog_selected).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.pickup_date).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.pickup_time).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.dog_daycare_duration).toStrictEqual("")
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.min).toStrictEqual(new Date(minDate))
  })

  it('sets the correct default data', () => {
    expect(typeof RegisterDaycare.data).toBe('function')
    const defaultData = RegisterDaycare.data()
    expect(defaultData.max).toStrictEqual(new Date(maxDate))
  })

})