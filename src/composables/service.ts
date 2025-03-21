import firestore from "~/firestore";

export const getAllData = async <T>(collection: string): Promise<T[]> => {
  const snapshot = await firestore.collection(collection).get();

  const data: T[] = [];
  snapshot.forEach((doc) => {
    data.push(doc.data() as T);
  });

  return data;
}