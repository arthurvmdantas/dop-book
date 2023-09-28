import { System, SystemState } from "./code/system.js";

console.log(SystemState.getInstance().systemState);

System.addMember({
  email: "johndoe@gmail.com",
  encryptedPassword: "c2VjcmV0",
  isBlocked: false,
  isVIP: true,
  bookLendings: [
    {
      bookItemId: "book-item-1",
      bookIsbn: "978-1779501127",
      lendingDate: "2020-04-23",
    },
  ],
});

console.log(SystemState.getInstance().get());
SystemState.getInstance().undo();
console.log(SystemState.getInstance().get());
