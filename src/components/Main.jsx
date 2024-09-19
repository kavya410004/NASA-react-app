
export default function Main(props){
    const {data} = props;

    return(
        <div className="img-container">
            <img src={data?.url} className="bg-img" alt="Moon-img" />
        </div>
    )
}