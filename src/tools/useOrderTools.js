import { useSelector } from "react-redux";
import { useConfig } from "./useConfig";

export const useOrderTools = () => {
   const {lastOrderID} = useSelector(store => store.orderList);
   const {clientPrice, cleaningPrice} = useConfig();
   const roundOne = (num) => num.toFixed(1);
   const roundTwo = (num) => num.toFixed(2);

   const fullOrdersData = (orders) => {
      const carpetArea = (fSide, sSide) => {
         return +((fSide * sSide).toFixed(1))
      };
      const carpetPrice = (area) => area * clientPrice;

      return orders.map(order => {
         const quantity = order.carpets.length;
         let totalArea = 0;
         let totalPrice = 0;

         const carpets = order.carpets.map(carpet => {
            const area = carpetArea(carpet[0], carpet[1]);
            const price = carpetPrice(area);

            totalArea += area;
            totalPrice += price;
            return {
               size: carpet,
               area: area,
               price: price,
            }
         });

         return {
            ID: order.ID,
            quantity,
            carpets,
            totalArea,
            totalPrice,
         }
      })
   } 

   return {
      fullOrdersData,
   }
}