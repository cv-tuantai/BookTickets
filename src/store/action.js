import { CHOOSE_SEAT, REMOVE_TICKET } from "./constants";

const actChooseSeat = (seat) => {
  return {
    type: CHOOSE_SEAT,
    payload: seat,
  };
};

const actRemoveTicket = (seat) => {
  return {
    type: REMOVE_TICKET,
    payload: seat,
  };
};

export { actChooseSeat, actRemoveTicket };
