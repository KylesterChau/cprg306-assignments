import { db } from "../../../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCol = collection(db, `users/${userId}/items`);
  const q = query(itemsCol);
  const itemSnapshot = await getDocs(q);
  return itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export function addItem(userId, item) {
  const itemsCol = collection(db, `users/${userId}/items`);
  return addDoc(itemsCol, { ...item, userId });
}