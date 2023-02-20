import { Name } from "./Person.types";

type PersonListProps = {
    nameList: Name[];
};

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.nameList.map((e, i) => {
                return (
                    <h2 key={i}>
                        {e.first} {e.last}
                    </h2>
                );
            })}
        </div>
    );
};
