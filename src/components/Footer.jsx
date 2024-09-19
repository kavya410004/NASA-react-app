export default function Footer(props){
    const {handleToggleModal, data} = props;
    return(
        <footer className="footer">
            <div className="bg-gradient"></div>
            <div>
                <h1>SPACE CLICKS</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}