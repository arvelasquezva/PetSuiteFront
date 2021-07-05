<template>
  <div class="notifications-list">
    <b-alert
      class="notification"
      dismissible=""
      :show="showAlert"
      v-for="item in notifications"
      :key="item.id"
      size="sm"
      @dismissed="handleOk(item.notification_id)"
    >
      <h2>
        <strong>{{ item.notification_subject }}</strong>
      </h2>
      <p class="my-4">
        {{ item.notification_description }}
      </p>
    </b-alert>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Notificacions",
  data() {
    var myError = "";
    return {
      currentUser: "",
      showAlert: false,
      myError: "",
    };
  },
  computed: {
    ...mapState(["notifications", "user"]),
  },
  methods: {
    handleOk(notification_id) {
      axios.post("/api/notifications/readNotification", {
        entero: notification_id,
      });
    },
    solicitarPeticion() {
      setInterval(() => {
        axios
          .post("/api/notifications/showMyNotifications", {
            user_id: this.currentUser.user,
            status: "No leido",
          })

          .then((response) => {
            if (Object.keys(response.data).length === 0) {
              this.showAlert = false;
            } else {
              this.$store.dispatch("getNotification", response.data);
              this.showAlert = true;
            }
          })
          .catch((error) => {
            if (error.response) {
              this.myError = error.response.data.message;
              console.log("This is myError", this.myError);
              if (this.myError.startsWith("JWT expired at")) {
                alert("Debes Cambiar tu contraseña");
                this.$router.push({
                  name: "Profile",
                  params: { id: this.currentUser.role },
                });
              }
            } else {
              console.log("Error", error.message);
            }
          });
      }, 10000);
    },
  },
  created() {
    this.solicitarPeticion();
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  },
  beforeDestroy() {},
};
</script>
<style scoped="">
.notifications-list {
  z-index: 999;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
p {
  color: white;
}
.notification {
  background: #01071f;
  border: none;
}
</style>
