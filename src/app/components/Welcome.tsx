
export default function Welcome(props: {greetings: string, name: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-blue-100 p-10 flex items-center justify-center rounded-lg shadow-lg">
            <h1 className="text-xl, text-black, font-bold"> {props.greetings}, {props.name}!</h1>
        </div>
    </div>
  )
}
