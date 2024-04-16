import { CanActivateFn } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {

  let acceder = false;
  let temp = localStorage.getItem("acceso");
  let rol = localStorage.getItem("user");

  if (temp === "T" && rol === "guest")
    acceder = true;

  return acceder;

};
