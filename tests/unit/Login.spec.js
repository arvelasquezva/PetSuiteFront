import { shallowMount} from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login', () => {
  const wrapper = shallowMount(Login)
  beforeEach(() => {    
  })
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="login">')
  })

  it('has a LoginComponente component', () => {
     expect(wrapper.findComponent({"name": "LoginComponente"}))
  })

  it('has a Cards component', () => {
    expect(wrapper.findComponent({"name": "Cards"}))
 })

 it('sets the correct default data', () => {
  expect(typeof Login.data).toBe('function')
  const defaultData = Login.data()
  expect(defaultData.Tarjetas).toStrictEqual([{"descripcion": "Te gusta salir a pasear con perros y tienes la vocación para su cuidado", 
  "id": 1, "imagen": "https://images.pexels.com/photos/165227/pexels-photo-165227.jpeg", "routes": "signUp/Paseadores", "title": "Paseador"}, {"descripcion": "Tienes una empresa consolidada y registrada para el cuidado de perros", 
  "id": 2, "imagen": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg", "routes": "signUp/Guarderias", "title": "Guarderia"}, {"descripcion": "Tienes una casa con el espacio para cuidar a perritos pero no estás registrado como empresa", 
  "id": 3, "imagen": "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", "routes": "signUp/Hospeadores", "title": "Hospeador"}])
  })

})