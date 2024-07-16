    

export default function Avatar({person, size =100}){
    console.log("props", props);
    return (
    <img
    className="avatar"
    src={`https://i.imgur.com/${props.person.imageId}.jpg`}
    alt={props.person.name}
    width={props.size}
    height={props.size}
    />
    );
}
