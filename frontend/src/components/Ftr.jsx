import "../styles/Ftr.css";

function Ftr({ftrCaptionContent}) {
    return <footer className="ftr">
        <p className="ftr__content">{ftrCaptionContent}</p>
        </footer>
}

export default Ftr;