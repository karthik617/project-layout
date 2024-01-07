const Background = ({children}:{children:React.ReactNode}) => {
    return <div className="absolute w-full h-full flex justify-center items-center text-5xl font-bold opacity-20 -z-50">{children}</div>
}
export default Background