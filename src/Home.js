import Typed from "react-typed";

const Home = () => {
    return ( 
        <div className=" p-6">
            <h1 className=" text-3xl font-bold">
                Hello!
            </h1>
            <h3 className=" font-mono">
                <Typed
                    strings={[
                            "I'm Natnael Tedros Desta.",
                            "I'm an Electrical and Computer Engineering student at AAU.",
                            "I'm passionate about Software Development."
                        ]}
                    typeSpeed={50}
                    backSpeed={20}
                    loop
                />
            </h3>
        </div>
        
     );
}
 
export default Home;