const Contents = ({project}) =>{
    return (
        <div>
            <h1>{project.title}</h1>
            <div>{project.description}</div>
            <div>{project.link}</div>
        </div>
    );
}
export default Contents;