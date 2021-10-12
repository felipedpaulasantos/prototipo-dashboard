import { Account } from "../account/account";

export const mockAccount = new Account(5512997653477, "Conta MOCK", "https://tralala.com/app", "A", "Admin", {
  endpoint: "http://whatsapp-endpoint.com",
  name: "rck",
  storeReceivedMessages: false,
  storeSentMessages: true,
  updateErrors: true,
  updateStatus: false
});
export const mockAccount2 = new Account(5508007260101, "Conta MOCK 2", "http://endpoint.com/endpoint", "I", "Fulano", {
  endpoint: "http://endpoint-whatsapp.com",
  name: "bot",
  storeReceivedMessages: true,
  storeSentMessages: true,
  updateErrors: true,
  updateStatus: true
});
export const mockAccounts: Account[] = [mockAccount, mockAccount, mockAccount, mockAccount2, mockAccount2, mockAccount2];
