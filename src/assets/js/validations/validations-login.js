'use strict'

import { required } from "@vuelidate/validators";

export default function validationsLogin() {
  return {
    email: { required },
    password: { required },
  };
}
