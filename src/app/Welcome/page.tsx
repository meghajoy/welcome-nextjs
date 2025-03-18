
export default function Welcome(props: {greetings: string, name: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col gap-4 bg-blue-100 p-14 flex items-center justify-center rounded-lg shadow-lg">
            <h1 className="text-xl, text-black, font-bold"> {props.greetings}, {props.name}!</h1>
            <button className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded-full cursor-pointer">See more?</button>
        </div>
    </div>
  )
}
