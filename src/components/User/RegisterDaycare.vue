<template>
  <div class="body">
    <h1>Solicita la guarderia {{ $route.params.id }}</h1>
    <div class="SignUp">
      <div class="row">
        <div class="col-md-5">
          <img
            height="300"
            src="@/assets/Images/Daycare.jpg"
            alt="image slot"
          />
        </div>
        <div class="col-md-7">
          <b-form @submit.prevent="makeDayCarePetition" class="pl-4">
            <!--Perro-->
            <b-form-group
              id="input-group-1"
              label="Selecciona tu perro:"
              label-for="input-1"
            >
              <b-form-select
                id="input-1"
                v-model="dog_selected"
                :options="valuePets"
                required
              ></b-form-select>
            </b-form-group>
            <!-- Fecha-->
            <b-form-group
              id="input-group-2"
              label="Fecha para el servicio:"
              label-for="input-2"
            >
              <b-form-datepicker
                placeholder="Selecciona Una Fecha"
                id="example-datepicker"
                :min="min"
                :max="max"
                v-model="pickup_date"
                required
                class="mb-2"
              >
              </b-form-datepicker>
            </b-form-group>
            <!-- Hora -->
            <b-form-group
              id="input-group-3"
              label="Hora de recogida de tu perro:"
              label-for="input-3"
            >
              <b-form-timepicker
                id="input-3"
                placeholder="Selecciona Una Hora"
                now-button
                reset-button
                locale="en"
                v-model="pickup_time"
                required
              ></b-form-timepicker>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="Duración en Horas:"
              label-for="input-5"
            >
              <b-form-input
                id="input-4"
                v-model="dog_daycare_duration"
                required
                placeholder="Ej: 5"
                type="number"
                min="0"
              >
              </b-form-input>
            </b-form-group>
            <!-- Servicios -->
            <b-form-group label="Servicios que ofrece:">
              <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="selected"
                :options="valueServices"
                name="flavour-1"
              ></b-form-checkbox-group>
            </b-form-group>
            <!-- Fin de formulario -->
            <b-button block pill type="submit" variant="warning">
              Solicita tu precio
            </b-button>
            <b-button
              v-if="dog_daycare_invoice_price != 0"
              block
              variant="success"
              v-on:click="aceptarPeticion()"
              >Confirma tu Petición
            </b-button>
          </b-form>
        </div>
      </div>

      <b-modal ok-only centered v-model="show" size="sm" @ok="handleOk">
        <p class="my-4">Has creado una petición para Guarderia</p>
        <p class="my-4">Si deseas cancelarlo dirigete a <a href="/MyPetitions">Mis peticiones</a></p>
      </b-modal>

      <b-modal v-model="showPrice">
        <template v-slot:modal-header="{ close }">
          <h5>{{ invoice.dog_daycare_invoice_dogdaycare_id }}</h5>
          <!-- Emulate built in modal header close button action -->
          <b-button size="sm" variant="danger" @click="close()">
           x
          </b-button>
        </template>
        <p class="my-4">
          <strong> Fecha del Servicio Solicitado: </strong
          >{{ invoice.dog_daycare_invoice_date }}
        </p>
        <p class="my-4">
          <strong> Horas Solicitadas: </strong
          >{{ invoice.dog_daycare_invoice_duration }}
        </p>
        <p class="my-4">
          <strong> Valor a Pagar: </strong> $ {{ invoice.dog_daycare_invoice_price }}
        </p>
        <template v-slot:modal-footer="{ ok, cancel}">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="success" @click="aceptarPeticion()">
            Aceptar
          </b-button>
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancel
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "RegisterDaycare",
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    return {
      show: false,
      showPrice: false,
      dog_daycare_invoice_price: 0,
      invoice: "",
      selected: [],
      currentUser: "",
      dog_selected: "",
      pickup_date: "",
      pickup_time: "",
      dog_daycare_duration: "",
      min: minDate,
      max: maxDate,
    };
  },
  computed: {
    ...mapState(["pets"]),
    ...mapGetters(["valuePets"]),
    ...mapGetters(["valueServices"]),
  },
  methods: {
    handleOk() {
      location.reload();
    },
    makeDayCarePetition() {
      console.log(this.dog_daycare_duration);
      this.$store
        .dispatch("consultPriceCarePetition", {
          dog_daycare_invoice_date: this.pickup_date + " " + this.pickup_time,
          dog_daycare_invoice_duration: this.dog_daycare_duration,
          dog_daycare_invoice_status: "Propuesto",
          dog_daycare_invoice_dogdaycare_id: this.$route.params.id,
          dog_daycare_invoice_client_id: this.currentUser.user,
          dog_daycare_invoice_dog_id: this.dog_selected,
          dog_daycare_invoice_services: this.selected,
        })
        .then(({ data }) => {
          if (data === "") {
            alert("El perro ya se encuentra en un Guarderia");
          } else {
            this.invoice = data;
            this.showPrice = true;
          }
        });
    },
    aceptarPeticion() {
      this.$store
        .dispatch("registerDayCarePetition", {
          dog_daycare_invoice_date: this.pickup_date + " " + this.pickup_time,
          dog_daycare_invoice_duration: this.dog_daycare_duration,
          dog_daycare_invoice_status: "Aceptado",
          dog_daycare_invoice_dogdaycare_id: this.$route.params.id,
          dog_daycare_invoice_client_id: this.currentUser.user,
          dog_daycare_invoice_dog_id: this.dog_selected,
          dog_daycare_invoice_services: this.selected,
        })
        .then(({ data }) => {
          console.log(data);
          if (data === "") {
            alert("El perro ya se encuentra en un Guarderia");
          } else {
            this.show = true;
          }
        });
    },
    getServices() {
      this.$store.dispatch("getServicesByClient", this.$route.params.id);
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getServices();
  },
};
</script>

<style scoped>
.body {
  margin: 10px;

  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.SignUp {
  margin-bottom: 50px;
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>
