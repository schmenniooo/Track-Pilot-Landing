
import './notification.css'

function Notification({text, isOpen}) {

    if (!isOpen) return null;

    return (
        <div className="notificationContainer">
            <p className="notificationText">{text}</p>
        </div>
    )
}

export default Notification;
