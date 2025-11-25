import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCol = collection(db, "shoppingLists");
  const q = query(itemsCol);
  const itemSnapshot = await getDocs(q);
  const itemList = itemSnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((item) => item.userId === userId);
  return itemList;
}

export function addItem(userId, item) {
  const itemsCol = collection(db, "shoppingLists");
  return addDoc(itemsCol, { ...item, userId });
}
