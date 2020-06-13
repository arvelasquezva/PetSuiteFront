<template>
  <div class="notifications-list">
    <b-alert
      dismissible
      :show="showAlert"
      v-for="item in notifications"
      :key="item.id"
      size="sm"
      @dismissed="handleOk(item.notification_id)"
    >
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
    return {
      currentUser: "",
      showAlert: false,
    };
  },
  computed: {
    ...mapState(["notifications"]),
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
<style>
.notifications-list{
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    width: 320px;
}
</style>
