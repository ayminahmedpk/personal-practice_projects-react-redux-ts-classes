

import React from "react"

import {TextChangeAction} from "./textActions";

export const textChange: (event: React.ChangeEvent<HTMLInputElement>) => TextChangeAction = 
(event) => ({
  type    : "TEXT_CHANGE",
  payload : event.target.value,
})