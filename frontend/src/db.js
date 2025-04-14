import { get, set } from 'idb-keyval';

// Save entire folders array
export const saveFolders = async (folders) => {
  await set('folders-data', folders);
};

// Load folders
export const loadFolders = async () => {
  return await get('folders-data') || []; // Return empty array if no data
};