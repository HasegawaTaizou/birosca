"use strict";

export default function closePopUp(mutation) {
  this.$store.commit(mutation, false);
}
