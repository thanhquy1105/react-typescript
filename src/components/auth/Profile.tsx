export type ProfileProps = {
    name: string;
};

const Profile = (props: ProfileProps) => {
    return <div>Private profile component. Name is {props.name}</div>;
};

export default Profile;
