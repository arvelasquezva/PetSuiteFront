<template>
  <div>
    <b-modal
      v-model="show"
      v-for="item in notifications"
      :key="item.id"
      size="sm"
      @ok="handleOk(item.notification_id)"
    >
      <p class="my-4">
        {{ item.notification_description }}
      </p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Notifications from "@/components/User/Notifications.vue";
export default {
  name: "Notificacions",
  data() {
    return {
      currentUser: "",
      show: false,
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
              this.show = false;
            } else {
              this.$store.dispatch("getNotification", response.data);
              this.show = true;
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
