import { Client, Databases, Account } from 'appwrite';

export const appwriteConfig = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://sfo.cloud.appwrite.io/v1',
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || '6928a9a2002e5c0f2a70',
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID || '6928aead000ade089e08',
  collections: {
    contacts: import.meta.env.VITE_APPWRITE_COLLECTION_ID_CONTACTS || '6928aeb9002d06766323',
    newsletter: import.meta.env.VITE_APPWRITE_COLLECTION_ID_NEWSLETTER || '6928aec3001900e360d2',
    blogs: import.meta.env.VITE_APPWRITE_COLLECTION_ID_BLOGS || '6928aecd000d63460600',
    news: import.meta.env.VITE_APPWRITE_COLLECTION_ID_NEWS || '6928aed500205c59f249',
  },
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

export const databases = new Databases(client);
export const account = new Account(client);
