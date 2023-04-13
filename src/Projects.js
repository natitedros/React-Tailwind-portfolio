import { useState } from "react";
import Contents from "./Contents";

const Projects = () => {
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(0);

    const projects = [{title: "Car Accident Management", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor mauris, gravida eget velit ut, commodo tincidunt libero. Curabitur rhoncus metus eu eleifend semper. Etiam sed rhoncus sem, ut ultrices elit. Fusce porttitor, nisi ut faucibus sodales, lorem nisl pulvinar elit, vitae facilisis ligula magna vestibulum nibh. Fusce pulvinar eros in bibendum condimentum. Duis convallis nisi ornare dui mollis lobortis. Morbi scelerisque dapibus erat, dapibus pretium felis dignissim eu. Donec tellus elit, congue quis luctus nec, efficitur eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc congue convallis arcu, in luctus tellus aliquet a. Proin porta arcu massa, in placerat sapien aliquet non. Aenean vitae nisi nisl. Nunc in turpis magna. Duis a elit non purus blandit sollicitudin in at risus. Nulla laoreet vestibulum blandit. Sed sit amet purus rhoncus est gravida auctor.",
    link:"https://github.com/natitedros"},
    {title: "Node Blog", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor mauris, gravida eget velit ut, commodo tincidunt libero. Curabitur rhoncus metus eu eleifend semper. Etiam sed rhoncus sem, ut ultrices elit. Fusce porttitor, nisi ut faucibus sodales, lorem nisl pulvinar elit, vitae facilisis ligula magna vestibulum nibh. Fusce pulvinar eros in bibendum condimentum. Duis convallis nisi ornare dui mollis lobortis. Morbi scelerisque dapibus erat, dapibus pretium felis dignissim eu. Donec tellus elit, congue quis luctus nec, efficitur eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc congue convallis arcu, in luctus tellus aliquet a. Proin porta arcu massa, in placerat sapien aliquet non. Aenean vitae nisi nisl. Nunc in turpis magna. Duis a elit non purus blandit sollicitudin in at risus. Nulla laoreet vestibulum blandit. Sed sit amet purus rhoncus est gravida auctor.",
    link:"https://github.com/natitedros"},
    {title: "Korenti Hodpital Automation", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor mauris, gravida eget velit ut, commodo tincidunt libero. Curabitur rhoncus metus eu eleifend semper. Etiam sed rhoncus sem, ut ultrices elit. Fusce porttitor, nisi ut faucibus sodales, lorem nisl pulvinar elit, vitae facilisis ligula magna vestibulum nibh. Fusce pulvinar eros in bibendum condimentum. Duis convallis nisi ornare dui mollis lobortis. Morbi scelerisque dapibus erat, dapibus pretium felis dignissim eu. Donec tellus elit, congue quis luctus nec, efficitur eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc congue convallis arcu, in luctus tellus aliquet a. Proin porta arcu massa, in placerat sapien aliquet non. Aenean vitae nisi nisl. Nunc in turpis magna. Duis a elit non purus blandit sollicitudin in at risus. Nulla laoreet vestibulum blandit. Sed sit amet purus rhoncus est gravida auctor.",
    link:"https://github.com/natitedros"},
    {title: "Rate Eat", 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor mauris, gravida eget velit ut, commodo tincidunt libero. Curabitur rhoncus metus eu eleifend semper. Etiam sed rhoncus sem, ut ultrices elit. Fusce porttitor, nisi ut faucibus sodales, lorem nisl pulvinar elit, vitae facilisis ligula magna vestibulum nibh. Fusce pulvinar eros in bibendum condimentum. Duis convallis nisi ornare dui mollis lobortis. Morbi scelerisque dapibus erat, dapibus pretium felis dignissim eu. Donec tellus elit, congue quis luctus nec, efficitur eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc congue convallis arcu, in luctus tellus aliquet a. Proin porta arcu massa, in placerat sapien aliquet non. Aenean vitae nisi nisl. Nunc in turpis magna. Duis a elit non purus blandit sollicitudin in at risus. Nulla laoreet vestibulum blandit. Sed sit amet purus rhoncus est gravida auctor.",
    link:"https://github.com/natitedros"}
]
const sideBar = [];
for (let i = 0; i < projects.length; i++){
    sideBar.push(
        <div className={`${(selected !== i) && "shadow-md shadow-slate-500"} flex justify-center p-3`} onClick={()=>{ setSelected(i)}}>
            <h1>{projects[i].title}</h1>
        </div>
    )
}

    return (
        <div className="flex">
            <div className={`${open ? "basis-1/4" : " basis-1/12"} h-screen basis-1/4 flex flex-col`}>
                {sideBar}
            </div>
            <div className={`${open ? "basis-3/4" : "basis-11/12"} h-screen`}>
                <Contents project={projects[selected]}/>
            </div>
        </div>
    );
}

export default Projects;