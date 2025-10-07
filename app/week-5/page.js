import NewItem from "./new-item";

export default function Home() {
  return (
    <main className="text-center">
        <h1 className="pt-2 text-3xl font-bold">Add New Item</h1>
        <NewItem>
        </NewItem>
    </main>
  );
}