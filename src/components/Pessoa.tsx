type Props = {
    data: {
        name: string;
        age: string;
    }
}
export const Pessoa = ({ data }:Props) => {
    return (
        <li>
            {data.name} - {data.age} anos.
        </li>
    )
}