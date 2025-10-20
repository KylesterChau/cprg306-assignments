import ItemList from "./item-list";

export default function Page() {
    
    return (
        <main className="flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen py-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-center text-3xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
                    Shopping List
                </h1>
                <ItemList />
            </div>
        </main>
    );
}