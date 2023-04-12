import Typed from "react-typed";

const Home = () => {
    return ( 
        <div className=" p-6 flex flex-row">
            <div className="basis-1/3 flex-col flex justify-evenly">
                <h1 className=" text-6xl font-bold">
                    Hello!
                </h1>
                <h3 className=" font-mono text-4xl col-auto">
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
            <div className="basis-2/3 flex justify-end">
                <iframe style={{"pointer-events": "none"}} title="Ironman" src="https://giphy.com/embed/xUA7aUpHy8FQYfACQ0" width="480" height="480"></iframe>
            </div>
          </div>
        
     );
}
 
export default Home;