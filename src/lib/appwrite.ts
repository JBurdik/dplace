import { Account, Client, Databases } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("dplace");

export const databases = new Databases(client);
export const account = new Account(client);
