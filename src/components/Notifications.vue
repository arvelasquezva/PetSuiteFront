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
          .post(
            "/api/notifications/showMyNotifications",
            {
              user_id: this.currentUser.user,
              status: "No leido",
            },
            {
              headers: {
                Authorization:
                  "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q",
              },
            }
          )
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
<style scoped>
.notifications-list {
  z-index: 999;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
