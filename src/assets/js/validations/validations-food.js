'use strict'

import { required } from "@vuelidate/validators";

export default function validationsFood() {
  return {
    newTitle: { required },
    newPrice: { required },
  };
}
