import { shallowMount} from '@vue/test-utils'
import SignUp from '@/views/SignUp.vue'

describe('SignUp', () => {
  const wrapper = shallowMount(SignUp)


  beforeEach(() => {    
  })
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<section id="Cliente">')
  })
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<section id="Paseador">')
  })
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<section id="Guarderia">')
  })
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<section id="Hospeador">')
  })

  it('has a UsuarioComponente component', () => {
     expect(wrapper.findComponent({"name": "UsuarioComponente"}))
  })

  it('has a PaseadorComponente component', () => {
    expect(wrapper.findComponent({"name": "PaseadorComponente"}))
  })

  it('has a HospeadorComponente component', () => {
    expect(wrapper.findComponent({"name": "HospeadorComponente"}))
  })

  it('has a GuarderiaComponente component', () => {
        expect(wrapper.findComponent({"name": "GuarderiaComponente"}))
  })

})