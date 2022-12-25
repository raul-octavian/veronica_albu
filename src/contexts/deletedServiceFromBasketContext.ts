import { createContext, useContext } from "react";
import { BasketHasService } from "../types/db/dbTypes";
import { SetNewService } from "../types/setTypes";

type DeletedServiceFromBasketContextProps = {
  deletedService: BasketHasService;
  setDeletedService: SetNewService;
};

const DeletedServiceFromBasketContext =
  createContext<DeletedServiceFromBasketContextProps>(
    {} as DeletedServiceFromBasketContextProps
  );

export const useDeletedServiceFromBasketContext = () =>
  useContext(DeletedServiceFromBasketContext);

export default DeletedServiceFromBasketContext;
