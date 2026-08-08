
export default function notFound () {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-row items-center justify-center h-screen">
                <div className={"outline outline-[#1f1f21] bg-[#131314] rounded-md w-200 h-100 "}>
                    <div className="flex flex-row items-center justify-center p-8">
                        <div className={"flex flex-col items-center justify-center p-8"}>
                        <h1 className={"text-8xl -bg-linear-60 from-red-400 via-red-200 to-red-800 bg-clip-text text-transparent"}>4 0 4</h1>
                            <span className={"text-4xl text-red-300 pb-12"}>Unknown Page</span>
                            <span className={"text-2xl text-center"}>The page you&#39;re looking for does not exist, if you believe this is an error, please contact the site author</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}