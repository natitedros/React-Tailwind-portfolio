import { Typography, IconButton } from "@material-tailwind/react";

const Contents = ({project}) =>{
    return (
        <div className="p-7 font-sans">
            <Typography variant="h3">{project.title}</Typography>
            <br />
            <Typography variant="h6">{project.description}</Typography>
            <br />
            <a href={project.link}><Typography variant='h5' color="blue">Go to Repo</Typography></a>
        </div>
    );
}
export default Contents;