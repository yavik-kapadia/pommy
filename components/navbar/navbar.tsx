export function Navbar() {
    return (
        <div className="flex justify-center min-w-[100%]">
            <div className="flex justify-start items-center">
                <a  href="/" className="text-xl text-center font-extralight px-10">Pommy</a>
            </div>
            <div className="flex justify-center items-center px-10">
                <a href="/" className="px-4">Home</a>
                <a href="/about" className="px-4">about</a>
                <a href="/settings" className="px-4">settings</a>
                <a href="/help" className="px-4">help</a>
            </div>
            <div className="flex justify-end items-center">
                <a href="/login" className=" justify-end p-4">login</a>
            </div>
        </div>
    )
}

export default Navbar;