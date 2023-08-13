import './loading.css'
function Loading() {
    return (
        <div className="loadingDiv">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h2 style={{ color: '#5C9EAD', textAlign:'center' }}>Loading</h2>
        </div>
    )
}
export default Loading;