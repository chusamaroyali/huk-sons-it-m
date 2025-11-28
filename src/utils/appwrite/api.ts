import { ID, Query } from 'appwrite';
import { databases, appwriteConfig } from './config';

export const api = {
  // Contacts
  createContact: async (data: { firstName: string; email: string; company?: string; message: string }) => {
    try {
      return await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.contacts,
        ID.unique(),
        data
      );
    } catch (error) {
      console.error('Appwrite service :: createContact :: error', error);
      throw error;
    }
  },

  // Newsletter
  subscribeNewsletter: async (email: string) => {
    try {
      return await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.newsletter,
        ID.unique(),
        {
          email,
          status: 'active',
        }
      );
    } catch (error) {
      console.error('Appwrite service :: subscribeNewsletter :: error', error);
      throw error;
    }
  },

  // Blogs
  getBlogs: async () => {
    try {
      return await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.collections.blogs,
        [
            Query.orderDesc('$createdAt')
        ]
      );
    } catch (error) {
      console.error('Appwrite service :: getBlogs :: error', error);
      throw error;
    }
  },

  getBlogBySlug: async (slug: string) => {
    try {
      const response = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.collections.blogs,
        [Query.equal('slug', slug)]
      );
      return response.documents[0];
    } catch (error) {
      console.error('Appwrite service :: getBlogBySlug :: error', error);
      throw error;
    }
  },

  // News
  getNews: async () => {
    try {
      return await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.collections.news,
        [
            Query.orderDesc('$createdAt')
        ]
      );
    } catch (error) {
      console.error('Appwrite service :: getNews :: error', error);
      throw error;
    }
  },
};
