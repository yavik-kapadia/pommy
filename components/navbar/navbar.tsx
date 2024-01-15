export function Navbar() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
                <a  href="/" className="text-xl text-center font-extralight">Pommy</a>
            </div>
            <div className="flex justify-end items-center">
                <a href="/" className="p-4">Home</a>
                <a href="/about" className="p-4">about</a>
                <a href="/settings" className="p-4">settings</a>
                <a href="/help" className="p-4">help</a>
                <a href="/login" className="p-4">login</a>
            </div>
        </div>
    )
}

export default Navbar;