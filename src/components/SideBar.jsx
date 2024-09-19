export default function SideBar(props){
    const { data, handleToggleModal} = props;

    return (
        <div className="sidebar">
            <div className="bg-overlay" onClick={handleToggleModal}></div>
            <div className="sidebar-content">
                <h2>{data?.title}</h2> 
                <div>
                    <p className="date">{data?.date}</p>
                    <p className="description"> {data?.explanation}</p>
                </div>
                <button  onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </div>
        </div>
    )
}