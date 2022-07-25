type Props = {
    url: string;
    legend: string;
}

export const Header = ({url, legend}: Props) => {
  return(
      <>
      <img src={url} alt="" />
      <p>{legend}</p>
      </> 
    );
}