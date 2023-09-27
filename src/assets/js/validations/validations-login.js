'use strict'

import { required } from "@vuelidate/validators";

export default function validationsLogin() {
  return {
    inputEmail: { required },
    inputPassword: { required },
  };
}
