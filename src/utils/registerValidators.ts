import { ref } from "vue";

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  password2: string;
  role: string;
}

export const registerUser = ref<RegisterUser>({
  name: "",
  email: "",
  password: "",
  password2: "",
  role: "",
});

